import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Flex, Box } from '@chakra-ui/react';
import { theme } from 'theme';

export const Container = styled(Flex)`
  .principal {
  }
  .fotosPerfil {
    max-width: 58px;
    img {
      border-radius: 50%;
    }
  }
`;
