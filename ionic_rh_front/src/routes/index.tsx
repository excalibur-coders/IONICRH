import Cadastro from 'pages/Cadastro_Colaborador';
import Login from 'pages/Login';
import Departamentos from 'pages/Departamentos';
import { Route, BrowserRouter, Routes as RoutesWrapper } from 'react-router-dom';
import Confirmacao from 'pages/Confirmacao';
import CriarConta from 'pages/CriarConta';
import ContaSucesso from 'pages/ContaSucesso';
import RecuperarSenha from 'pages/RecuperarSenha';
import ResetarSenha from 'pages/ResetarSenha';
import SenhaAlterada from 'pages/SenhaAlterada';
import Funcionarios from 'pages/funcionários';
import Cargos from 'pages/Cargos'
import DeptoTI from 'pages/Depto_Selecionado';


import Colab_home from 'pages/Colaborador_home';
import Colab_onboard from 'pages/Colaborador_onboard';
import Colab_user from 'pages/Colaborador_user';

function Routes() {
  return (
    // <BrowserRouter>
      <RoutesWrapper>
        <Route path="/" element={<Login />} />
        <Route path="/Departamentos" element={<Departamentos />} />
        <Route path="/Cadastro_colaborador" element={<Cadastro />} />
        <Route path="/Confirmacao_cadastro" element={<Confirmacao />} />
        <Route path="/Funcionarios" element={<Funcionarios />} />
        <Route path="/Cadastro" element={<CriarConta />} />
        <Route path="/ContaSucesso" element={<ContaSucesso />} />
        <Route path="/RecuperarSenha" element={<RecuperarSenha />} />
        <Route path="/Resetar" element={<ResetarSenha />} />
        <Route path="/SenhaAlterada" element={<SenhaAlterada />} />
        <Route path="/Colab_home" element={<Colab_home />} />
        <Route path="/Colab_onboard" element={<Colab_onboard />} />
        <Route path="/Colab_user" element={<Colab_user />} />
        <Route path="/Cargos" element={<Cargos />} />
        <Route path="/Ti" element={<DeptoTI />} />
      </RoutesWrapper>
    // </BrowserRouter>
  )
}

export default Routes;
