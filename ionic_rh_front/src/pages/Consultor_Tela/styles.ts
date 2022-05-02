import { theme } from 'theme';
import {Flex} from '@chakra-ui/react';
import styled from '@emotion/styled'

export const Container = styled(Flex)`
width: 100%;

main{
    margin: 4rem auto;
    display: flex;
    flex-direction: column;


    .linha{
        display: flex;
        flex-direction: row;
        height: 18vh;
        width: 90vw;
        gap: 10px;
        

        .porcent_obrigatorio{
            background-color: white;
            width: 50vw;
            padding-top:20px;
            

            h1{
                text-align:center;
                font-size: 30px;
            }

            .test{
                width: 50%;
                margin: 15px auto;
            }

        }
        .porcent_geral{
            background-color: white;
            width: 50vw;
            padding-top:20px;
            

            h1{
                text-align:center;
                font-size: 30px;
            }

            .test{
                width: 50%;
                margin: 15px auto;
            }
        }
    }

    .cards{
        background-color: white;
        margin-top: 20px;
        width: 90vw;
        display: flex;
        flex-direction: column;
        gap: 50px;
        padding: 15px;
     
     h2{
         margin: 0 auto;
         font-size: 50px;
     }
    }
}


@media(max-width: 1260px) {
    display: flex;
    flex-direction: column;
    .linha{
        display: flex;
        flex-direction: column;
        height: 18vh;
        width: 90vw;
        gap: 10px;
        

        .porcent_obrigatorio{
            background-color: white;
            width: 50vw;
            padding-top:20px;
            

            h1{
                text-align:center;
                font-size: 20px;
            }

            .test{
                width: 50%;
                margin: 15px auto;
            }

        }
        .porcent_geral{
            background-color: white;
            width: 50vw;
            padding-top:20px;
            

            h1{
                text-align:center;
                font-size: 20px;
            }

            .test{
                width: 50%;
                margin: 15px auto;
            }
        }
    }

    .cards{
        background-color: white;
        margin-top: 20px;
        width: 90vw;
        display: flex;
        flex-direction: column;
        gap: 50px;
        padding: 15px;
     
     h2{
         margin: 0 auto;
         font-size: 35px;
     }
    }
}

`