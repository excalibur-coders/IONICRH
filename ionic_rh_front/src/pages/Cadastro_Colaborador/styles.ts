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
  }
  .main {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 95vh;
    margin-top: 1vh;
    align-items: center;
    position: absolute;

    img {
      position: absolute;
      width: 600px;
      z-index: -1;
      margin-top: 80px;
      opacity: 0.5;
    }
    .ButtonW {
      display: flex;
      align-items: center;
      margin-top: 18rem;
    }
  }
  .mainWrapper {
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: space-around;
    position: relative;
    z-index: 1;

    .leftWrapper {
      h3 {
        font-size: 30px;
        font-weight: bold;
      }
      h6 {
        font-size: 28px;
        font-weight: bold;
        margin-top: 15px;
      }
      .form {
        width: 22rem;
        margin-top: 80px;
        flex-direction: column;
        .dropdown {
          display: flex;
          flex-direction: column;
          .dropdowntext {
            display: flex;
            align-items: left;
            font-size: 20px;
            font-weight: bold;
          }
          .genero {
            height: 33px;
            width: 10rem;
            border: 1px solid black;
            border-radius: 10px;
            background-color: #f4f4f5;
          }

          .etnia {
            height: 33px;
            width: 22rem;
            border: 1px solid black;
            border-radius: 10px;
            background-color: #f4f4f5;
          }

          .estadocivil {
            height: 33px;
            width: 22rem;
            border: 1px solid black;
            border-radius: 10px;
            background-color: #f4f4f5;
          }

          .parentesco {
            height: 33px;
            width: 10rem;
            border: 1px solid black;
            border-radius: 10px;
            background-color: #f4f4f5;
          }
        }
      }
      .form-row {
        flex-direction: row;
        display: flex;
        justify-content: space-between;
      }
    }
    .anexoWrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;

      .form {
        width: 22rem;
        flex-direction: row;
        margin-top: 15px;
        margin-bottom: 10rem;
        h6 {
          font-size: 30px;
          font-weight: bold;
          margin-top: 0px;
        }
        h4 {
          font-size: 20px;
          font-weight: bold;
        }
        Button {
          margin-top: 30px;
        }
      }
    }
    .centerWrapper {
      display: flex;
      align-items: center;
      justify-content: top;
      flex-direction: column;
      input {
        background-color: #f4f4f5;
      }
      h5 {
        font-size: 30px;
        font-weight: bold;
      }
      .form {
        margin-top: 80px;
        width: 22rem;
        flex-direction: column;
        .dropdown {
          display: flex;
          flex-direction: column;
          .dropdowntext {
            display: flex;
            align-items: left;
            font-size: 20px;
            font-weight: bold;
          }
          .status {
            height: 33px;
            width: 22rem;
            border: 1px solid black;
            border-radius: 10px;
            background-color: #f4f4f5;
          }
        }
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
    .rightWrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      margin-bottom: 13rem;
      h4 {
        font-size: 30px;
        font-weight: bold;
      }
      h6 {
        font-size: 30px;
        font-weight: bold;
        margin-top: 15px;
      }
      h1 {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
      }
      .form {
        margin-top: 80px;
        width: 22rem;
        flex-direction: column;
        .dropdown {
          display: flex;
          flex-direction: column;
          .dropdowntext {
            display: flex;
            align-items: left;
            font-size: 20px;
            font-weight: bold;
          }
          .parentesco {
            height: 33px;
            width: 10rem;
            border: 1px solid black;
            border-radius: 10px;
            background-color: #f4f4f5;
          }
        }
        .form-row {
          flex-direction: row;
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
`;
