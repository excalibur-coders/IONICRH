import { theme } from 'theme';
import {Flex} from '@chakra-ui/react';
import styled from '@emotion/styled'

export const Container = styled(Flex)`
display: flex;
flex-direction: column;
align-items: center;

h1 {
    margin: auto;
    margin-top: 100px;
    text-align: center;
    font-weight: bold;
    font-size: 70px;
    height: 100px;

}
.buttons_onboard {
    margin-top: 5rem;
    display: flex;
    z-index: -10;

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

@media(max-width: 768px) {
  .buttons_onboard{

    display: flex;
    flex-direction: column;
  }
}


`;
