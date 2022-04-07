import styled from '@emotion/styled';
import { Flex, Box } from '@chakra-ui/react';
import { theme } from 'theme';

export const Container = styled(Flex)`

.input{
  top: 52px
  bottom: 800px;
  left: 300px;
}

.Table{
  width: 90%;
  display: flex;
  justify-content: center ;
  align-items: center;
  margin-left: 80px;
  margin-top: 100px;

}

.back{
  margin-left: 170px;
}


`;

export const ContainerDiv = styled.div` // navbar provisória

.sidebar{
  width: 100%;
  height: 50px;
  display: fixed;
  background: ${theme.colors.font};
}

.filter{
  display: flex;
}



`;

export const ContainerInput = styled.div`


justify-content: allign;
margin-left: 30px;



`;

export const FilterContainer = styled.div`




`;
