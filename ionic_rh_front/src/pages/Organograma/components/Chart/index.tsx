import styled from '@emotion/styled';
import * as S from './styles';
import { parseCookies } from 'nookies';
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState, createRef, useRef } from 'react';
import { api } from 'services/api';
import { AxiosError } from 'axios';
import OrgChart from '@balkangraph/orgchart.js';
/* http://localhost:5000/departamentos/organograma */


console.log(exportPDF);
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
  const divRef = createRef<string | HTMLElement | any>()

  const getOrganograma = useCallback(() => {
    api
      .get('/Organograma/', {
        headers: {
          Authorization: `Bearer ${cookies['ionicookie.token']}`,
        },
      })
      .then(({ data }) => {
        /* console.log(data); */
        setOrganograma(data);
      })
      .catch((error: Error | AxiosError) => {
        console.log(error);
      });
  }, [cookies]);

  useEffect(() => {
    // getOrganograma();
    api
    .get('/Organograma/', {
      headers: {
        Authorization: `Bearer ${cookies['ionicookie.token']}`,
      },
    })
    .then(({ data }) => {
      /* console.log(data); */
      setOrganograma(data);
    })
    .catch((error: Error | AxiosError) => {
      console.log(error);
    });

    // console.log("departamento: ", organograma?.[1].dep_name);



    // eslint-disable-next-line no-var
    var nodeChart: INodeChart[] = [
      {
        id: 1,
        name: 'kleber',
      },
      {
        id: 2,
        pid: 1,
        name: 'Romario',
      },
      {
        id: 3,
        pid: 1,
        name: 'Pelé',
      },
      {
        id: 4,
        pid: 1,
        name: 'Bebeto',
      },
      {
        id: 5,
        pid: 3,
        name: 'Romario',
      },
      {
        id: 6,
        pid: 4,
        name: 'Romario',
      },
      {
        id: 7,
        pid: 2,
        name: 'Romario0000',
      },
    ];

    console.log(organograma?.[2]);

    // organograma?.[2].cargo.forEach(element => {
    //   element.contrato.forEach((element2) => {
    //     nodeChart.push({
    //       id: element2.user.user_id,
    //       pid: element.cargo_valor,
    //       name: element2.user.user_nome,
    //       // cargo: element.cargo_area
    //     })
    //   })
      // console.log("cargo area: ", element.cargo_area);
      // console.log("cargo valor: ", element.cargo_valor);
      // console.log("cargo head: ", element.headID);
      // console.log("contrato: ", element.contrato);
    // });

    console.log("node: ", nodeChart);

    new OrgChart(divRef.current, {
      nodes: nodeChart,
      nodeBinding: {
        field_0: "name",
      }
    })

  }, [organograma?.[0]?.dep_id]);


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
