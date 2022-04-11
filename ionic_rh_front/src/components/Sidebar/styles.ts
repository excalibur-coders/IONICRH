import styled from '@emotion/styled';
import { Box, List, ListIcon } from '@chakra-ui/react';
import { theme } from 'theme';



export const Container = styled.div`

.CustomSidebar {

  background: ${theme.colors.primary};
  listStyleType: "none";
  width: 378px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-bottom: 200px;
  box-shadow: 2px 2px 2px 1px rgba(0.5, 0.7, 0.4, 0.2);
}

`
;

export const ContainerList = styled.div`

.font{
  fontSize='2xl';
  color='Black'
}

`;

