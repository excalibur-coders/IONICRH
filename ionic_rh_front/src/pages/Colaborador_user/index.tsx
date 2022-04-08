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
                            <span>Rua/Av:</span> 
                            <span>N:</span> 
                            <span>Compl:</span> 
                            <span>Matrícula:</span> 
                            <span>Departamento:</span> 
                        </div>
                    </div>
                </div>
                <div className='rightWrapper'>

                </div>
            </div>
        </div>
    </S.Container>
    </>
  )
}

export default Colab_user;