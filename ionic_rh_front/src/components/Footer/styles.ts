import styled from '@emotion/styled';
import { theme } from 'theme';

export const Container = styled.div`
display: flex;
align-items: center;
margin-top: 5rem;
margin-bottom: 30px;

  h1{
    font-size: 20px;
    margin: auto;
    font-weight: bold;
    color: ${theme.colors.font};
    text-align: center;
  }
`;
