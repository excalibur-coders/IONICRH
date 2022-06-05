import styled from '@emotion/styled';
import { Flex } from '@chakra-ui/react';
import { theme } from 'theme';

export const Container = styled(Flex)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .header {
    width: 100vw;
    height: 7vh;
    display: flex;
    gap: 20px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    h1 {
      margin-top: 5px;
      font-weight: bold;
      font-size: 30px;
    }
    img {
      margin-left: 50px;
      width: 10rem;
    }
  }
  .main {
    .ButtonW {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
    }
    .mainWrapper {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      position: relative;
      .leftWrapper {
        width: 22rem;
        h3 {
          font-size: 30px;
          font-weight: bold;
          
        }
        h6 {
          font-size: 28px;
          font-weight: bold;
          margin-top: 15px;
        }
        .radio{
          margin-top: 10px;
          margin-bottom: 10px;
          h1 {
            font-size: 15px;
            font-weight: bold;
            color: #F54A3D;
          }
        }
        .form {
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
          gap: 30px;
          display: flex;
          justify-content: space-between;
        }
      }
      .anexoWrapper {
        display: flex;
        .form {
          width: 22rem;
          align-items: start;
          justify-content: start;
          flex-direction: column;
          margin-top: 15px;
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
        width: 22rem;
        h5 {
          font-size: 30px;
          font-weight: bold;
        }
        h6 {
          font-size: 30px;
          font-weight: bold;
          margin-top: 15px;
        }
        .form {
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
          gap: 30px;
          display: flex;
          justify-content: space-between;
        }
        h2 {
          font-size: 20px;
          font-weight: bold;
        }
      }
      .rightWrapper {
        width: 22rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        margin-bottom: 3rem;
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
  }
  @media (max-width: 1080px) {
    height: 100%;
    .main {
      height: 100%;
      .mainWrapper {
        align-items: center;
        justify-content: center;
        margin-top: 1rem;
        flex-direction: column;
        height: 100%;
        .leftwrapper {
        }
        .rightWrapper {
        }
      }
    }
  }
  @media (max-width: 768px) {
    height: 100%;
    .main {
      height: 100%;
      .mainWrapper {
        align-items: center;
        justify-content: center;
        margin-top: 1rem;
        flex-direction: column;
        height: 100%;
        .leftwrapper {
        }
        .rightWrapper {
        }
      }
    }
  }
`;