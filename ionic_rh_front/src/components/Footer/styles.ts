import styled from '@emotion/styled';
import { theme } from 'theme';

export const Container = styled.div`
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 3rem;
  display: flex;

  h1 {
    margin: auto;
    font-size: 20px;
    font-weight: bold;
    color: ${theme.colors.font};
    text-align: center;
  }

  h1:hover{
    cursor: pointer;
    font-size: 21px;
    color: ${theme.colors.primary};
    transition: 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 15px;
    }
  }
`;
