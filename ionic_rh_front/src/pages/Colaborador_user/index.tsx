import Colab_Nav from 'components/Colab_Nav';
import { MdAccountCircle } from 'react-icons/md';
import { ReactNode } from 'react';
import { theme } from 'theme';
import { BsClipboardCheck } from "react-icons/bs";

import * as S from './styles';
import { Button } from '@chakra-ui/react';
//import * as S from './styles';


function Colab_user(){
  return (
    <>
    <Colab_Nav/>
    <S.Container>
        <div className='leftWrapper'>
            <div className='foto'>
                <MdAccountCircle  size='100%'/>
            </div>
        </div>
        <div className='rightWrapper'>

        </div>
    </S.Container>
    </>
  )
}

export default Colab_user;