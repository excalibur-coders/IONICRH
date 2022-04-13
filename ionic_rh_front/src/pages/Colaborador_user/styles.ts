import { theme } from 'theme';
import {Flex} from '@chakra-ui/react';
import styled from '@emotion/styled'

export const Container = styled(Flex)`
height: 100vh;
display: flex;
flex-direction: column;
color: ${theme.colors.font};


Wrapper{
    display: flex;
    justify-content: center;
    text-align: justify;
}

.centerWrapper{
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    flex-wap: wap;
}

.leftWrapper{
    float: left;
    width: 25%;
    margin-top: 40px;
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
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 15px;
  }

  .coluna1 span{
    font-weight: bold;
    font-size: 20px;
  }
}



.coluna2{
display: flex;
flex-direction: column;
text-align: left;
margin-left: 15px;

    h2{
      margin-top: 20px;
      text-align: center;
      font-weight: bold;
      font-size: 30px;
    }

    span{
      font-weight: bold;
      font-size: 20px;
   }
}


.rightWrapper{
width: 76%;
display: flex;
float:right;
flex-direction: column;

    .linhaDados{
        display: flex;
        flex-direction: row;

        .dadosUser1{
          margin-top: 40px;
          display: flex;
          flex-direction: column;
          align-items: left;
          width: 50%;
          font-weight: bold;
          font-size: 20px;
          padding: 0 50px;
        }

        .dadosUser2{
          margin-top: 40px;
          display: flex;
          flex-direction: column;
          align-items: left;
          width: 50%;
          font-weight: bold;
          font-size: 20px;
          padding: 0 50px;
        }
}

    .cargo {
        display: flex;
        flex-direction: row;
        padding: 40px 50px;

        h3{
            font-size: 20px;
        }
    }

    h4 {
        text-align: left;
        font-weight: bold;
        font-size: 20px;
        padding: 40px 50px;
    }

    .buttons_onboard {
        z-index: -10;
        display: flex;

        small {
          text-align: center;
          font-weight: bold;
          font-size: 20px;
          display: block;
          text-align: center;
        }

        .button {
          height: 120px;
          margin: 20px 50px;
        }
    }
}



}

@media(max-width: 768px){
  .Wrapper{
    display: flex;
    flex-direction: column;
    overflow-x: hidden;

    .centerWrapper{
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
    }

    .leftWrapper{
      display: flex;
      flex-direction: column;
      text-align: center;
      margin: auto;
      margin-top: 100px;
      width: 100%;
    }

    .rightWrapper{
      width: 100%;
      display: flex;
      flex-direction: column;

      .buttons_onboard{
        display: flex;
        flex-direction: column;
      }

      .linhaDados{
        align-items: left;
        display: flex;
        flex-direction: column;

        .dadosUser1{
          width: 100%;
          text-align: left;
          padding: 0 0px;
          margin-left: 15px;
        }

        .dadosUser2{
          width: 100%;
          text-align: left;
          padding: 0 0px;
          margin-left: 15px;
        }
      }

      .cargo {
        display: flex;
        flex-direction: row;
        margin-top: 25px;
        margin-left: 15px;
        text-align: left;
        width: 90%;
      }
    }
  }
`
