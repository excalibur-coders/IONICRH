import { theme } from 'theme';
import * as S from './styles';
import RespBar from 'components/RespBar';
import { AspectRatio } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { parseCookies } from 'nookies';
import { AxiosError } from 'axios';
import { api } from 'services/api';
import Input from 'components/Input';


interface ITrilha {
    trilha_id: number;
    trilha_nome: string;
    juntos: ICurso [];
    userUserId: number;
}
interface ICurso {
    curso_id: number;
    curso_nome: string;
    curso_descricao: string;
    curso_criacao: string;
    curso_duracao: number;
}


function Cursos(){
    const cookies = parseCookies();
    const { id } = useParams();
    const [trilha, setCursos] = useState<ITrilha[]>([]);

    const getAllCursos = useCallback(() => {
        api
          .get(`/curso/ver-trilha/${id}`, {
            headers: {
              Authorization: `Bearer ${cookies['ionicookie.token']}`,
            },
          })
          .then(({ data }) => {
            /* console.log('Boa noite', data); */
            setCursos(data);
          })
          .catch((error: Error | AxiosError) => {
            console.log(error);
          });
      }, [cookies, id]);


      useEffect(() => {
        getAllCursos();
      }, [getAllCursos]);

    return(
        <>
        <S.Container>
            <RespBar />
            <main>
                <div className='position'>
                    <div className="video">
                        <video width="666" controls>
                            <source src="" type="video/mp4"/>
                        </video>    
                    </div>

                    <div className="list">
                        {trilha.map(trilha => {
                            return(
                                <>
                                <button className="dropdown-btn">
                                    {trilha.trilha_nome}                                    
                                </button>
                                {trilha.juntos.map(curso => {
                                    return(
                                        <>
                                        <div className="dropdown-container">
                                            <a href="">{curso.curso_nome}</a>
                                        </div>                                
                                        </>
                                    )
                                })}
                                </>
                            )})}
                    </div>
                </div>
                <div className='descricao'>
                    <div className='texto'>
                        <h1>Descrição: </h1>
                        {trilha.map(trilha => {
                            return(
                                <>
                                {trilha.juntos.map(curso => {
                                    return(
                                        <>
                                        <h2>{curso.curso_descricao}</h2>
                                        </>
                                    )
                                })}
                                </>
                            )})}
                    </div>
                </div>
            </main>            
        </S.Container>
        </>
    )
}

export default Cursos;