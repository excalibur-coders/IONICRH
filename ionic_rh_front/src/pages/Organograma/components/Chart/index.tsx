import { Tree, TreeNode } from 'react-organizational-chart';
import styled from '@emotion/styled';

import * as S from './styles';
import { parseCookies } from 'nookies';
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { api } from 'services/api';
import { AxiosError } from 'axios';
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
    getOrganograma();
  }, [getOrganograma]);
  return (
    <S.Container>
      {organograma?.map((org, i) => (
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
      ))}
    </S.Container >
  );
}

export default Card;
