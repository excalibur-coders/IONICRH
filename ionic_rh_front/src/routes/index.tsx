import Login from 'pages/Login';
///<<<<<<< HEAD
import CriarConta from 'pages/CriarConta';
import ContaSucesso from 'pages/ContaSucesso';
import RecuperarSenha from 'pages/RecuperarSenha';
import ResetarSenha from 'pages/ResetarSenha';
import SenhaAlterada from 'pages/SenhaAlterada';
import Funcionarios from 'pages/funcionários';

//>>>>>>> 3bdfe9d09531ee5d4c840242128d3ff745e9a39c
import { Route, BrowserRouter, Routes as RoutesWrapper } from 'react-router-dom';

function Routes() {
  return (
    <BrowserRouter>
      <RoutesWrapper>
        <Route path="/" element={<Login />} />
        <Route path="/Funcionarios" element={<Funcionarios />} />
        <Route path="/Cadastro" element={<CriarConta />} />
        <Route path="/ContaSucesso" element={<ContaSucesso />} />
        <Route path="/RecuperarSenha" element={<RecuperarSenha />} />
        <Route path="/Resetar" element={<ResetarSenha />} />
        <Route path="/SenhaAlterada" element={<SenhaAlterada />} />
      </RoutesWrapper>
    </BrowserRouter>
  )
}

export default Routes;
