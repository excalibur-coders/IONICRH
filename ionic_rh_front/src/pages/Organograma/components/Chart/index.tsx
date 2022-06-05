import styled from '@emotion/styled';
import * as S from './styles';
import { parseCookies } from 'nookies';
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState, createRef, useRef } from 'react';
import { api } from 'services/api';
import { AxiosError } from 'axios';
import OrgChart from '@balkangraph/orgchart.js';
/* http://localhost:5000/departamentos/organograma */

interface IDep {
  dep_id: number;
  dep_name: string;
  cargo: ICargo[];
}
interface ICargo {
  cargo_area: string;
  cargo_valor: number;
  headID: number;
  contrato: IContrato[];
}
interface IContrato {
  contrato_matricula: string;
  user: IUser;
}
interface IUser {
  user_id: number;
  user_nome: string;
  user_email: string;
}

interface ICardProps {
  depName?: string;
}

interface INodeChart {
  id: number;
  pid?: number;
  name: string;
  // cargo: string;
}

function Card({ depName }: ICardProps) {
  const StyledNode = styled.div`
    padding: 5px;
    border-radius: 100%;
    display: inline-block;
  `;
  const StyledCard = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    display: inline-block;
    border: 1px solid black;
    border-radius: 8px;
    position: relative;
    background: #2fb4d8b8;
    box-shadow: -2px 2px 10px 3px rgba(0, 0, 0, 0.1);
    width: 200px;
  `;
  const cookies = parseCookies();
  const navigate = useNavigate();
  const [organograma, setOrganograma] = useState<IDep[]>();
  const [head, setHead] = useState<IUser>();
  const divRef = createRef<string | HTMLElement | any>()

  const getOrganograma = useCallback(() => {
    api
      .get('/Organograma/', {
        headers: {
          Authorization: `Bearer ${cookies['ionicookie.token']}`,
        },
      })
      .then(({ data }) => {
        setOrganograma(data);
      })
      .catch((error: Error | AxiosError) => {
        console.log(error);
      });
  }, []);

  const getHeadInfo = useCallback(() => {
    api
      .get(`/user/usuario-perfil/${organograma?.[2].cargo[0].headID}`, {
        headers: {
          Authorization: `Bearer ${cookies['ionicookie.token']}`,
        },
      })
      .then(({ data }) => {
        setHead(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [organograma?.[0]?.dep_id]);

  useEffect(() => {
    getOrganograma();
    getHeadInfo();

  }, [organograma?.[0]?.dep_id]);

  useEffect(() => {
    // eslint-disable-next-line no-var
    var nodeChart: INodeChart[] = [];

    if (head)
      nodeChart = [{
        id: 1,
        name: head.user_nome
      }]

    organograma?.[2].cargo.forEach((element, index) => {
      element.contrato.forEach((element2) => {
        nodeChart.push({
          id: index + 2,
          pid: element.cargo_valor,
          name: element2.user.user_nome,
          // cargo: element.cargo_area
        })
      })
    });

    console.log("node: ", nodeChart);

    new OrgChart(divRef.current, {
      nodes: nodeChart,
      nodeBinding: {
        field_0: "name",
      }
    })
  }, [divRef, head, organograma]);


  return (
    <S.Container>
      <div ref={divRef}></div>
      {/* {organograma?.map((org, i) => (
        <>
          {depName === 'ti'
          && org.dep_name === 'IT Infrastructure Ops'
          ? (
            <Tree key={i}
              label={
                < StyledCard >
                  <div>
                    <b>
                      <h1 className="depTitle">
                        {org.dep_name}
                      </h1>
                    </b>
                  </div>
                </StyledCard>
              }
            >
              {
                org.cargo.map((carg, i) => (
                  <>
                    <TreeNode label={
                      <div className='cardWrapper'>
                        <StyledCard>
                          <h1 key={carg.cargo_valor} className="cardTitle" >{carg.cargo_area}</h1>
                        </StyledCard>
                        <StyledNode>{carg.contrato.map((cont, i) => (
                          <span className='colabName' key={i}>
                            {cont.user.user_nome}
                          </span>
                        ))}</StyledNode>
                      </div>
                    } />
                  </>
                ))
              }
            </Tree >
          ) : depName === 'marketing'
          && org.dep_name === 'Marketing Institucional' ?
          <Tree key={i}
          label={
            < StyledCard >
              <div>
                <b>
                  <h1 className="depTitle">
                    {org.dep_name}
                  </h1>
                </b>
              </div>
            </StyledCard>
          }
        >
          {
            org.cargo.map((carg, i) => (
              <>
                <TreeNode label={
                  <div className='cardWrapper'>
                    <StyledCard>
                      <h1 key={carg.cargo_valor} className="cardTitle" >{carg.cargo_area}</h1>
                    </StyledCard>
                    <StyledNode>{carg.contrato.map((cont, i) => (
                      <span className='colabName' key={i}>
                        {cont.user.user_nome}
                      </span>
                    ))}</StyledNode>
                  </div>
                } />
              </>
            ))
          }
        </Tree >
        : depName === 'administrative'
        && org.dep_name === 'Administrative & Financial' ? <>
          <Tree key={i}
          label={
            < StyledCard >
              <div>
                <b>
                  <h1 className="depTitle">
                    {org.dep_name}
                  </h1>
                </b>
              </div>
            </StyledCard>
          }
        >
          {
            org.cargo.map((carg, i) => (
              <>
                <TreeNode label={
                  <div className='cardWrapper'>
                    <StyledCard>
                      <h1 key={carg.cargo_valor} className="cardTitle" >{carg.cargo_area}</h1>
                    </StyledCard>
                    <StyledNode>{carg.contrato.map((cont, i) => (
                      <span className='colabName' key={i}>
                        {cont.user.user_nome}
                      </span>
                    ))}</StyledNode>
                  </div>
                } />
              </>
            ))
          }
        </Tree >
        </> : <></> }
        </>
      ))} */}
    </S.Container >
  );
}

export default Card;
