import Login from 'pages/Login';
import Funcionarios from 'pages/Login/funcionários';
import { Route, BrowserRouter, Routes as RoutesWrapper } from 'react-router-dom';

function Routes() {
  return (
    <BrowserRouter>
      <RoutesWrapper>
        <Route path="/" element={<Login />} />
        <Route path="/Funcionarios" element={<Funcionarios />} />
      </RoutesWrapper>
    </BrowserRouter>
  )
}

export default Routes;
