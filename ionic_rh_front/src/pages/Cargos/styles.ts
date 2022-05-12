import styled from '@emotion/styled';
import { Flex, Box } from '@chakra-ui/react';
import { theme } from 'theme';

export const Container = styled(Flex)`
  backgroud: #00000029;
  margin-top: 3rem;
  overflow: hidden;

  .input {
    margin-left: 50px;
    width: 70vw;
    margin: 0 auto;
    height: 100vh;
  }

  .TBody {
    width: 75vw;
    color: {theme.colors.primary};
    justify-content: space-around;
  }

  .TableTwo {
    display: flex;
    justify-content: space-between;
    margin-left: -20px;
  }

  .search {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media (max-width: 700px) {
    border: 1px solid red;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const ContainerDiv = styled.div`
  .filter {
    display: flex;
  }
`;

export const ContainerInput = styled.div`
  margin-left: 30px;
  bottom: 90px;
`;
