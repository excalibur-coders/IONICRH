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
function Card() {
  const StyledNode = styled.div`
    padding: 5px;
    border-radius: 100%;
    display: inline-block;
  `;
  const StyledCard = styled.div`
    padding: 5px;
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
        <Tree key={i}
          label={
            < StyledCard >
              <div>
                <b>
                  <h1>
                    <>
                      <h1><h1>{org.dep_name}</h1></h1>
                    </>
                  </h1>
                </b>
              </div>
            </StyledCard>
          }
          >
            {
              org.cargo.map((carg, i) =>(
                <>
                <TreeNode label={
                  <>
                  <StyledCard>
                    <h1 key={carg.cargo_valor}>{carg.cargo_area}</h1>
                  </StyledCard>
                  <StyledNode>{carg.contrato.map((cont, i)=> (
                    <>
                      {cont.user.user_nome}
                    </>
                  ))}</StyledNode>
                  </>
                  }/>
                </>
              ))
            }
        </Tree >
        </>
      ))}
    </S.Container >
  );
}

export default Card;
