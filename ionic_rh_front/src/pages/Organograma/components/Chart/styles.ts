import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Flex, Box } from '@chakra-ui/react';
import { theme } from 'theme';

export const Container = styled(Flex)`
  flex: 1;

  color: #303030;

  div {
    background: #F4F4F5;
  }

  .fotosPerfil {
    max-width: 58px;
    img {
      border-radius: 50%;
    }
  }

  .cardTitle {
    font-size: 1.1rem;
  }

  .depTitle {
    font-size: 1.1rem;
  }

  .cardWrapper {
    display: flex;
    flex-direction: column;
  }

  .colabName {
    font-size: 1.3rem;
  }
`;
