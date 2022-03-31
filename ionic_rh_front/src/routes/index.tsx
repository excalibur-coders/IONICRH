import Login from 'pages/Login';
<<<<<<< HEAD
import Funcionarios from 'pages/Login/funcionários';
=======
import CriarConta from 'pages/CriarConta';
import ContaSucesso from 'pages/ContaSucesso';
import RecuperarSenha from 'pages/RecuperarSenha';
import ResetarSenha from 'pages/ResetarSenha';
import SenhaAlterada from 'pages/SenhaAlterada';

>>>>>>> 3bdfe9d09531ee5d4c840242128d3ff745e9a39c
import { Route, BrowserRouter, Routes as RoutesWrapper } from 'react-router-dom';

function Routes() {
  return (
    <BrowserRouter>
      <RoutesWrapper>
        <Route path="/" element={<Login />} />
<<<<<<< HEAD
        <Route path="/Funcionarios" element={<Funcionarios />} />
=======
        <Route path="/Cadastro" element={<CriarConta />} />
        <Route path="/ContaSucesso" element={<ContaSucesso />} />
        <Route path="/RecuperarSenha" element={<RecuperarSenha />} />
        <Route path="/Resetar" element={<ResetarSenha />} />
        <Route path="/SenhaAlterada" element={<SenhaAlterada />} />
>>>>>>> 3bdfe9d09531ee5d4c840242128d3ff745e9a39c
      </RoutesWrapper>
    </BrowserRouter>
  )
}

export default Routes;
