import styled from '@emotion/styled';
import { theme } from 'theme';

export const Container = styled.div`
  .contaiiner {
    position: relative;

    .navigation {
      position: relative;
      width: 60px;
      height: 100vh;
      background: ${theme.colors.primary};
      border-radius: 0px 10px 10px 0px;
      overflow: hidden;
      box-shadow: 0 5px 15px #rgba(0, 0, 0, 0.2);
      transition: 0.5s;

      ul {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;

        li {
          position: relative;
          list-style: none;
          width: 100%;

          a {
            position: relative;
            display: block;
            width: 100%;
            display: flex;
            text-decoration: none;
            color: ${theme.colors.font};
            font-weight: 500;

            .icon {
              position: relative;
              display: flex;
              justify-content: center;
              align-items: center;
              min-width: 60px;
              height: 60px;
              line-height: 60px;
              text-align: center;

              img {
                width: 50px;
              }
            }

            .tittle {
              position: relative;
              display: block;
              height: 60px;
              line-height: 60px;
              withe-space: nowrap;
            }
          }
        }

        li:hover {
          background: #58d3db;
        }
      }
    }
    .navigation.open {
      width: 300px;
    }
    .toggle {
      position: absolute;
      top: calc(50% - 20px);
      right: -20px;
      width: 40px;
      height: 40px;
      background: ${theme.colors.primary};
      border: 5px solid #f4f4f5;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;

      .before {
        display: none;
      }
    }
    .toggle::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      line-height: 30px;
      text-align: center;
      font-size: 16px;
      color: #black;
    }
    .toggle.open::before {
      content: '';
    }
    .toggle.open {
      display: flex;
      align-items: center;
      justify-content: center;
      .after {
        display: none;
      }
      .before {
        display: flex;
      }
    }
  }
`;
