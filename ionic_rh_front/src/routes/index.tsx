import Cadastro from 'pages/Cadastro_Colaborador';
import Login from 'pages/Login';
import { Route, BrowserRouter, Routes as RoutesWrapper } from 'react-router-dom';

function Routes() {
  return (
    <BrowserRouter>
      <RoutesWrapper>
        <Route path="/" element={<Login />} />
        <Route path="/Cadastro_colaborador" element={<Cadastro />} />
      </RoutesWrapper>
    </BrowserRouter>
  )
}

export default Routes;
