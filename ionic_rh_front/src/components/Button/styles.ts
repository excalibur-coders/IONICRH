import styled from '@emotion/styled';
import { Button } from '@chakra-ui/react';
import { theme } from 'theme';

interface CustomButtonProps {
  color: string;
}

export const Container = styled.div`

`;

export const CustomButton = styled(Button)<CustomButtonProps>`
  /* Arrumar padding */
  /* padding: -100px; */

  border-color: ${({color}) => (color)};
  border-radius: 20px;

  background: transparent;

  span {
    color: ${({color}) => (color)};
  }
`;
