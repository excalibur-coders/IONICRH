import Colab_Nav from 'components/Colab_Nav';
import RespBar from 'components/RespBar';
import { MdAccountCircle } from 'react-icons/md';
import { ReactNode } from 'react';
import { theme } from 'theme';
import { BsClipboardCheck } from "react-icons/bs";
import { MdArrowForward } from "react-icons/md";

import * as S from './styles';
import { Button } from '@chakra-ui/react';
import Footer from 'components/Footer';
//import * as S from './styles';


function Colab_user(){
  return (
    <>
    <S.Container>
    <RespBar/>
    <main>
        <div className='Wrapper'>
            <div className='centerWrapper'>
                <div className='leftWrapper'>
                    <div className='foto'>
                        <MdAccountCircle  size='100%'/>
                    </div>

                    <div className='User'>
                        <h1>User</h1>
                    </div>

                    <div className='coluna'>
                        <div className='coluna1'>
                            <span>Cargo:</span>
                            <span>RG:</span>
                            <span>CPF:</span>
                            <span>Matrícula:</span>
                            <span>Departamento:</span>
                        </div>
                    </div>

                    <div className='coluna'>
                        <div className='coluna2'>
                            <h2>Endereço</h2>
                            <span>Rua/Av:</span>
                            <span>N:</span>
                            <span>Compl:</span>
                            <span>Matrícula:</span>
                            <span>Departamento:</span>
                        </div>
                    </div>
                </div>
                <div className='rightWrapper'>
                    <div className='linhaDados'>
                        <div className='dadosUser1'>
                            <span>E-mail:</span>
                            <span>Data de nascimento:</span>
                            <span>Telefone:</span>
                            <span>Tipo de contrato:</span>
                        </div>
                        <div className='dadosUser2'>
                            <span>Estado civil:</span>
                            <span>Sexo:</span>
                            <span>Escolaridade:</span>
                            <span>Turno:</span>
                        </div>
                    </div>
                    <div className='cargo'>
                        <h3><b>Descrição do cargo:</b> Informações e tarefas a serem desempenhadas em uma função específica da empresa. Nessa descrição de atividades são registrados o objetivo, responsabilidades, escopo de trabalho, requisitos, condições de trabalhos e outros.</h3>
                    </div>
                    <h4>Cursos realizados:</h4>
                    <div className='buttons_onboard'>
                        <div>
                        <Button className='button' as={BsClipboardCheck} color={ theme.colors.font}></Button>
                        <small>Curso RDC-16</small>
                        </div>
                        <div>
                        <Button className='button' as={BsClipboardCheck} color={ theme.colors.font}></Button>
                        <small>Curso 2</small>
                        </div>
                        <div>
                        <Button className='button' as={BsClipboardCheck} color={ theme.colors.font}></Button>
                        <small>Curso 3</small>
                        </div>
                        <div>
                        <Button className='button' as={MdArrowForward} color={ theme.colors.font}></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer>
    <Footer/>
    </footer>
    </S.Container>
    </>
  )
}

export default Colab_user;
