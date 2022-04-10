import Cadastro from 'pages/Cadastro_Colaborador';
import Login from 'pages/Login';
import { Route, BrowserRouter, Routes as RoutesWrapper } from 'react-router-dom';
import Confirmacao from 'pages/Confirmacao';
import CriarConta from 'pages/CriarConta';
import ContaSucesso from 'pages/ContaSucesso';
import RecuperarSenha from 'pages/RecuperarSenha';
import ResetarSenha from 'pages/ResetarSenha';
import SenhaAlterada from 'pages/SenhaAlterada';
import Funcionarios from 'pages/funcionários';


function Routes() {
  return (
    // <BrowserRouter>
      <RoutesWrapper>
        <Route path="/" element={<Login />} />
        <Route path="/Cadastro_colaborador" element={<Cadastro />} />
        <Route path="/Confirmacao_cadastro" element={<Confirmacao />} />
        <Route path="/Funcionarios" element={<Funcionarios />} />
        <Route path="/Cadastro" element={<CriarConta />} />
        <Route path="/ContaSucesso" element={<ContaSucesso />} />
        <Route path="/RecuperarSenha" element={<RecuperarSenha />} />
        <Route path="/Resetar" element={<ResetarSenha />} />
        <Route path="/SenhaAlterada" element={<SenhaAlterada />} />
      </RoutesWrapper>
    // </BrowserRouter>
  )
}

export default Routes;
