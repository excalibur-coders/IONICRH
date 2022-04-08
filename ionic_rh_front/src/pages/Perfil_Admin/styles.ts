import styled from '@emotion/styled';
import { Flex, Box } from '@chakra-ui/react';
import { theme } from 'theme';

export const Container = styled(Flex)`

.input{
margin-left: 50px;
}

.Table{
  width: 90%;
  display: flex;
  align-items: left;
  margin-left: 0px;
  margin-top: 100px;

}


.back{
  margin-left: 800px;
  display: flex;
  top: 100px;
}

.breadcrumb{
  margin-left: 200px;
}


`;

export const ContainerDiv = styled.div`


.filter{
  display: flex;
}



`;

export const ContainerInput = styled.div`

margin-left: 30px;
bottom: 90px;



`;

export const ContainerLinks = styled.div`

.breadcrumb{

  margin-left: 700px;


}



`;
