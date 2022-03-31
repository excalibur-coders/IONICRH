import styled from '@emotion/styled';
import { Box, List, ListIcon } from '@chakra-ui/react';
import { theme } from 'theme';

/*interface ListProps {
  colorScheme: string;
  size: string | number;
  spacing: number;
  stylePosition: number;
  fontSize: number;
}*/


export const Container = styled(Box)`

.CustomSidebar {

  background: ${theme.colors.primary};
  listStyleType: "none";
  width: 25%;
  height: "100vh";
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-bottom: 200px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}

.teste{
  fontSize='2xl';
  color='Black'
}



`
;

/*export const List = styled.list<ListProps>`
font-size: ${(props) => ( props.fontSize )}px;
font-weight: bold;
color: ${theme.colors.font};

`
;*/


