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
import User from 'pages/User';
import UserEdit from 'pages/UserEdit';
import Administrador from 'pages/Administrador';
import AdministradorEdit from 'pages/AdministradorEdit';


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
        <Route path="/User/:id" element={<User />} />
        <Route path="/UserEdit" element={<UserEdit />} />
        <Route path="/Administrador" element={<Administrador />} />
        <Route path="/AdministradorEdit" element={<AdministradorEdit />} />
      </RoutesWrapper>
    // </BrowserRouter>
  )
}

export default Routes;
