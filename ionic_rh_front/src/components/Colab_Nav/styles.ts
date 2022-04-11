import styled from '@emotion/styled';
import { Flex } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { theme } from 'theme';

export const Container = styled.div`
z-index: 1000;

img {
  width: 120px;
  margin-top: 10px;
  margin: 5px 5px;
}
`;

export const ContainerFlex = styled(Flex)`
  justify-content: space-between;
  align-items: center;

  .colab_routes{
    margin-left: 40rem;
    font-size: 25px;
    font-family: coolvetica, sans-serif;
    @import url("https://fonts.adobe.com/fonts/coolvetica");

    a{
      margin-left: 25px;
    }

    a:hover{
      color: ${theme.colors.primary};
    }
  }
`;

export const ContainerButton = styled.div`
.button {
  width: 70px;
  margin-top: 10px;
  margin: 5px 5px;
  border-radius: 200px;
  opacity: 1 ;
}
`;

