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

  @media (max-width: 768px) {
    h1 {
      font-size: 15px;
    }
  }
`;
