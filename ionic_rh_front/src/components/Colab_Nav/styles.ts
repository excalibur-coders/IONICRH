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

  .colab_routes {
    margin-left: 40rem;
    font-size: 25px;
    font-family: coolvetica, sans-serif;
    @import url('https://fonts.adobe.com/fonts/coolvetica');

    a {
      margin-left: 25px;
    }

    a:hover {
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
    opacity: 1;
  }
`;

//color: #f4f4f5;
//width: 100%;
//boxShadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
//position: fixed;
