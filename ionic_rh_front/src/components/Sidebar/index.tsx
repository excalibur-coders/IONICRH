import { Link } from 'react-router-dom';
import { Container } from './styles';
import { List, ListItem, ListIcon } from '@chakra-ui/react';

import {
  MdList,
  MdOutlinePersonAddAlt1,
  MdPeopleAlt,
  MdOutlineComputer,
  MdOutlineListAlt,
  MdPeopleOutline,
} from 'react-icons/md';

import * as S from './styles';

function Sidebar() {
  return (
    <S.Container>
      <div>
        <Container className="CustomSidebar">
          <div>
            <S.ContainerList className="font">
              <List spacing={3}>
                <List spacing={1}>
                  <ListItem />
                  <ListItem fontSize="5xl" color="Black">
                    <Link to="/">Funcionários</Link>
                  </ListItem>
                  <ListItem fontSize="xl" color="#4D4E4F">
                    <ListIcon as={MdOutlinePersonAddAlt1} color="#4D4E4F" />
                    <Link to="/cadastrar">Cadastrar</Link>
                  </ListItem>
                  <ListItem fontSize="xl" color="#4D4E4F">
                    <ListIcon as={MdList} color="#4D4E4F" />
                    <Link to="/funcionarios">Listar</Link>
                  </ListItem>
                </List>
                <List spacing={0}>
                  <ListItem fontSize="5xl" color="Black">
                    <Link to="/departamentos">Departamentos</Link>
                  </ListItem>
                  <ListItem fontSize="xl" color="#4D4E4F">
                    <ListIcon as={MdList} color="#4D4E4F" />
                    <Link to="/departamentos">Listar</Link>
                  </ListItem>
                </List>
                <List spacing={0}>
                  <ListItem fontSize="5xl" color="Black">
                    <Link to="/cargos">Cargos</Link>
                  </ListItem>
                  <ListItem fontSize="xl" color="#4D4E4F">
                    <ListIcon as={MdList} color="#4D4E4F" />
                    <Link to="/cargos">Listar</Link>
                  </ListItem>
                </List>
                <List spacing={0}>
                  <ListItem fontSize="3rem" color="Black">
                    <ListIcon fontSize="2xl" as={MdPeopleAlt} color="black" />
                    <Link to="/departamentos">Organograma</Link>
                  </ListItem>
                  <ListItem fontSize="xl" color="#4D4E4F">
                    <ListIcon as={MdOutlineListAlt} color="#4D4E4F" />
                    <Link to="/adm">ADM</Link>
                  </ListItem>
                  <ListItem fontSize="xl" color="#4D4E4F">
                    <ListIcon as={MdOutlineComputer} color="#4D4E4F" />
                    <Link to="/ti">TI</Link>
                  </ListItem>
                  <ListItem fontSize="xl" color="#4D4E4F">
                    <ListIcon as={MdPeopleOutline} color="#4D4E4F" />
                    <Link to="/rh">RH</Link>
                  </ListItem>
                </List>
              </List>
            </S.ContainerList>
          </div>
        </Container>
      </div>
    </S.Container>
  );
}

export default Sidebar;
