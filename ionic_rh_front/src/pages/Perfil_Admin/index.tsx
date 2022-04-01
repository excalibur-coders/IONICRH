import { ReactNode } from 'react';
import {Flex, Box} from '@chakra-ui/react';
import { theme } from 'theme';
import Sidebar from 'components/Sidebar';
import Input from 'components/Input';
import { MdFilterList} from 'react-icons/md';
import * as S from './styles';



function PerfilAdmin(){
        return(
          <>
          <S.ContainerDiv>
          <div className="sidebar">navbar aqui</div>
          </S.ContainerDiv>


            <S.Container>
              <div >
                <Sidebar/>
                </div>
                <div className="input">
                 <div>Filtrar</div>
                  <div className="filter">
                   <Box as={MdFilterList}/><Box/>
                  </div>
                <Input size='xs' width="120px" fontSize={15} placeholder="Nome" labelText={""} />
                <Input size='xs' width="120px" fontSize={15} placeholder="Cargo" labelText={""} />
                </div>
            </S.Container>


          </>
)

}

export default PerfilAdmin

