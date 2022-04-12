import Colab_Nav from 'components/Colab_Nav';
import { ReactNode } from 'react';
import { theme } from 'theme';
import { BsClipboardCheck } from "react-icons/bs";

import * as S from './styles';
import { Button } from '@chakra-ui/react';
import Footer from 'components/Footer';
//import * as S from './styles';


function Colab_onboard(){
  return (
    <>
    <Colab_Nav/>
    <S.Container>
      <h1>Cursos</h1>
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
      </div>
    </S.Container>
    <Footer/>
    </>
  )
}

export default Colab_onboard;
