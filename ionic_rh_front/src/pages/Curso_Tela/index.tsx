import { theme } from 'theme';
import * as S from './styles';
import RespBar from 'components/RespBar';
import { AspectRatio } from '@chakra-ui/react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react';

function Cursos(){
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
                        <h1>Metodologias Ageis</h1>
                        <a href="">Low code</a>
                        <a href="">JavaScript</a>
                        <a href="">Canva</a>
                        <a href="">TypeScript</a>
                        <a href="">JavaScript</a>
                        <a href="">Canva</a>
                        <a href="">TypeScript</a>
                        <a href="">JavaScript</a>
                        <a href="">Canva</a>
                        <a href="">TypeScript</a>
                        <a href="">JavaScript</a>
                        <a href="">Canva</a>
                        <a href="">TypeScript</a>
                    </div>
                </div>
                <div className='descricao'>
                    <div className='texto'>
                        <h1>Descrição: </h1>
                        <h2>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h2>
                    </div>
                </div>
            </main>
        </S.Container>
        </>
    )
}

export default Cursos;