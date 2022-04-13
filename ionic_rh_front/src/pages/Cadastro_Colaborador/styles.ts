import styled from '@emotion/styled';
import { Flex } from '@chakra-ui/react';
import { theme } from 'theme';

export const Container = styled(Flex)`

height: 100vh;

  .header {
    width: 100%;
    height: 7vh;
    display: flex;
    flex-direction: row;
    position: absolute;
    border: 1px solid black;

    h1 { 
        margin-left: 30px;
        margin-top: 5px;
        font-weight: bold;
        font-size: 30px;
        

        img {
            width: 20rem;
        }
    }
  
    img {
      width: 160px;
      margin: 5px 15px;
    }
}

.main {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 95vh;
    margin-top: 5vh;
    align-items: center;
    position: absolute;

    .mainWrapper {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
   

        .leftWrapper {
            margin-bottom: 17rem;
    
    
            .form {
                width: 30rem;
                margin-top: 80px;
                flex-direction: column;
            }
        
            .form-row {
                flex-direction: row;
                display: flex;
                justify-content: space-between;
            }
        }

        .rightWrapper {
            display: flex;
            align-items: center;
            justify-content: top;
            flex-direction: column;
            margin-bottom: 13rem;
        

            .form {
                width: 30rem;
                margin-left: 50px;
                margin-top: 80px;
                flex-direction: column;
            }

            .form-row {
                flex-direction: row;
                display: flex;
                justify-content: space-between;
            }

            h2 {
                font-size: 20px;
                font-weight: bold;
            }
        }
    }
    .ButtonW {
        display: flex;
        align-items: center;
        padding-bottom: 50px;

        Button {
            width: 200px;
            height: 60px;
            font-size: 20px;
            border-width: 3px;
        }
    } 
}
`