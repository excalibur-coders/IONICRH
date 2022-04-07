import { theme } from 'theme';
import {Flex} from '@chakra-ui/react';
import styled from '@emotion/styled'

export const Container = styled(Flex)`
display: flex;

.leftWrapper{
border: 1px solid red;
width: 20%;
height: 95vh;
display: flex;
flex-direction: column;
align-items: center;

 .foto{
     margin-top: 50px;
     border: 1px solid black;
     border-radius: 90px;
     width: 150px;
     height: 150px;
     box-shadow: 0 0 1em black;
 }

}

.rightWrapper{
    border: 1px solid blue;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;

}
`