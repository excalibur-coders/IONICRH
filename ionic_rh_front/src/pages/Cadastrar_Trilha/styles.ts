import styled from "@emotion/styled";
import { theme } from "theme";

export const Container = styled.div`
height: 100vh;
display: flex;
align-items: center;

main{
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
    font-size: 35px;
    font-weight: bold;
  }

  form{
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .buttons{
    margin-top: 20px;
    display: flex;
    gap: 10px;
  }
}
`
