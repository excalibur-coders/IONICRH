import { theme } from 'theme';
import {Flex} from '@chakra-ui/react';
import styled from '@emotion/styled'

export const Container = styled(Flex)`
display: flex;
flex-direction: column;
align-items: center;

h1 {
    margin-top: 2rem;
    margin: auto;
    text-align: center;
    font-weight: bold;
    font-size: 70px;
    height: 100px;
}
.buttons_onboard {
    margin-top: 5rem;
    display: flex;

    small {
      text-align: center;
      font-weight: bold;
      font-size: 20px;
      display: block; 
      text-align: center;
    }

    .button {
      height: 150px;
      margin: 50px 50px;
    }
}

footer {
  margin-top: 13rem;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
 
}
`;
