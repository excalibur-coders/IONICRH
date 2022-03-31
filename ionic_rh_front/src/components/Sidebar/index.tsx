import { ReactNode } from 'react';
import {Link} from 'react-router-dom';
import { Container} from './styles';
import {List, ListItem, ListIcon, Flex} from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react'
import { MdList, MdOutlinePersonAddAlt1, MdPeopleAlt, MdOutlineComputer, MdOutlineListAlt, MdPeopleOutline } from 'react-icons/md'
import { HamburgerIcon } from "@chakra-ui/icons";

import * as S from './styles';



/*  colorScheme: string;
  size: string | number;
  spacing: number;
  stylePosition: number;
  fontSize: number;

      <S.List fontSize={50}
    colorScheme={'black'}
    size={80}
    stylePosition={12}>
     </S.List>*/



function Sidebar(){
  return (
    <S.Container>
      <div>
        <Container className='CustomSidebar'>
          <div >
            <List  spacing={3}>
              <List spacing={1}>
                  <ListItem />
                  <ListItem fontSize='5xl' color='Black'>
                    <Link to="/">Funcionários</Link>
                  </ListItem>
                  <ListItem fontSize='xl' color='#4D4E4F'>
                  <ListIcon as = {MdOutlinePersonAddAlt1} color='#4D4E4F' />
                    <Link to="/cadastrar">Cadastrar</Link>
                  </ListItem>
                  <ListItem  fontSize='xl' color='#4D4E4F'>
                  <ListIcon as = {MdList} color='#4D4E4F' />
                    <Link to="/listar">Listar</Link>
                  </ListItem>
              </List>
              <List spacing={0}>
                  <ListItem fontSize='5xl' color='Black'>
                    <Link to="/cadastrar">Departamentos</Link>
                  </ListItem>
                  <ListItem fontSize='xl' color='#4D4E4F'>
                  <ListIcon as = {MdList} color='#4D4E4F' />
                    <Link to="/listar">Listar</Link>
                  </ListItem>
              </List>
              <List spacing={0}>
                  <ListItem fontSize='5xl' color='Black'>
                    <Link to="/listagem">Cargos</Link>
                  </ListItem>
                  <ListItem fontSize='xl' color='#4D4E4F'>
                  <ListIcon as = {MdList} color='#4D4E4F' />
                    <Link to="/listar">Listar</Link>
                  </ListItem>
              </List>
              <List spacing={0}>
              <ListItem fontSize='3rem' color='Black'>
                  <ListIcon fontSize='2xl' as = {MdPeopleAlt} color='black' />
                    <Link to="/departamentos">Organograma</Link>
                  </ListItem >
                  <ListItem fontSize='xl' color='#4D4E4F'>
                  <ListIcon as = {MdOutlineListAlt} color='#4D4E4F' />
                    <Link  to="/adm">ADM</Link>
                  </ListItem>
                  <ListItem fontSize='xl' color='#4D4E4F'>
                    <ListIcon as = {MdOutlineComputer} color='#4D4E4F' />
                    <Link to="/ti">TI</Link>
                  </ListItem>
                  <ListItem fontSize='xl' color='#4D4E4F'>
                  <ListIcon as = {MdPeopleOutline} color='#4D4E4F' />
                    <Link to="/rh">RH</Link>
                    </ListItem>
              </List>
                </List>
            </div>
        </Container>
      </div>
    </S.Container>
  )
};


export default Sidebar;
