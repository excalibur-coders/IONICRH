import styled from '@emotion/styled';
import { Flex } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { theme } from 'theme';

export const Navbar = styled.nav`
  z-index: 1000;
  width: 100%;
  height: 3rem;
  background-color: #f4f4f5;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0px;
  display: flex;
  justify-content: space-around;

  *::before {
    margin: 0;
    box-sizing: border-box;
  }

  img {
    width: 120px;
    margin: 10px;
    position: absolute;
  }
`;
export const Navlist = styled.div`
  display: flex;
  margin-left: 50rem;
  justify-content: space-between;
  font-size: 25px;

  li {
    list-style: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: ${theme.colors.font};
  }

  a:hover {
    color: ${theme.colors.primary};
  }

  .nav_menu {
    gap: 1.5rem;
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .nav_item0 {
    display: none;
  }

  .nav_toggler div {
    width: 2.5rem;
    height: 0.2rem;
    margin: 0.4rem;
    background: ${theme.colors.font};
  }

  .nav_toggler {
    display: none;
  }

  @media (max-width: 1075px) {
    margin-left: 20rem;
  }

  @media screen and (max-width: 768px) {
    .nav_menu {
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
      position: absolute;
      top: 2.5rem;
      right: 0;
      width: 100%;
      height: 95vh;
      background: #f4f4f5;
      flex-direction: column;
      transform: translateX(100%);
      transition: all 0.45s;

      a::before {
        background: transparent;
      }

      .nav_item0 {
        display: flex;
      }
    }

    .nav_menu.open {
      transform: translateX(0);
    }

    .nav_toggler {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      .bar {
        position: relative;
        width: 32px;
        height: 2px;
        background: black;
      }

      .bar::before,
      .bar::after {
        content: '';
        position: absolute;
        height: 2px;
        background: black;
        border-radius: 2px;
        transition: all 0.45s ease-in-out;
      }

      .bar::before {
        width: 32px;
        transform: translateY(-8px);
        right: 0;
      }

      .bar::after {
        width: 32px;
        transform: translateY(8px);
      }
    }

    .nav_toggler.open {
      .bar {
        transform: translateX(-40px);
        background: transparent;
      }

      .bar::before {
        width: 32px;
        transform: rotate(45deg) translate(26px, -26px);
      }

      .bar::after {
        width: 32px;
        transform: rotate(-45deg) translate(26px, 26px);
      }
    }
  }
`;

export const Navbutton = styled.div`
  margin-right: 10px;

  .button {
    width: 70px;
    margin-top: 10px;
    margin: 5px 5px;
    border-radius: 200px;
    opacity: 1;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
