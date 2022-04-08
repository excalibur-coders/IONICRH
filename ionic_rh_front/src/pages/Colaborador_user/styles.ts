import { theme } from 'theme';
import {Flex} from '@chakra-ui/react';
import styled from '@emotion/styled'

export const Container = styled(Flex)`
height:100vh;
display: flex;
flex-direction:column;
color: ${theme.colors.font};

Wrapper{
    position:relative;
    display: flex;
    justify-content: center;
    text-align: justify;
}

.centerWrapper{
    margin: 0 auto;
    display: flex;
    flex-wap: wap;
}

.leftWrapper{
    position: relative;
    float: left;
    width: 30%;
    margin-top: 50px;
    text-align: center;

 .foto{
     border: 1px solid black;
     border-radius: 90px;
     width: 150px;
     height: 150px;
     margin: 0 auto;
     box-shadow: 0 0 1em black;
 }

 .User{
     margin: 0 auto;
     margin-top:20px;
 }

 .User h1 {
     text-align:center;
     font-weight: bold;
     font-size: 30px;
     margin-bottom: 20px;
 }
 
 .coluna{
     width:100%;
 }

 .coluna1{
     display:flex;
     flex-direction: column;
     text-align:left;
     padding: 0 50px;
 }

.coluna1 span{
    font-weight: bold;
    font-size: 20px;
}

}

.rightWrapper{
    border: 1px solid blue;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;

}
`