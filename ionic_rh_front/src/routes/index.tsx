//
import Login from 'pages/Login';
import { Route, BrowserRouter, Routes as RoutesWrapper } from 'react-router-dom';
import Confirmacao from 'pages/Confirmacao';

function Routes() {
  return (
    <BrowserRouter>
      <RoutesWrapper>
        <Route path="/" element={<Login />} />
        <Route path="/Confirmacao_cadastro" element={<Confirmacao />} />
      </RoutesWrapper>
    </BrowserRouter>
  )
}

export default Routes;
