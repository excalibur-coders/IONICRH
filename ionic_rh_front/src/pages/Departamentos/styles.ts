import styled from '@emotion/styled';
import { Flex } from '@chakra-ui/react';

export const Container = styled(Flex)`
  backgroud: #00000029;
  margin-top: 3rem;
  overflow: hidden;

  .Corpo {
    margin-left: 50px;
    width: 70vw;
    margin: 0 auto;
    height: 100vh;
  }

  .TBody {
    width: 70vw;
    color: {theme.colors.primary};
  }

  .TableTwo {
    justify-content: left;
  }

  .search {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

`;

export const ContainerInput = styled.div`
  margin-left: 30px;
  bottom: 90px;
`;
