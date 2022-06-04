import Cadastro from 'pages/Cadastro_Colaborador';
import Login from 'pages/Login';
import Departamentos from 'pages/Departamentos';
import { Route, Routes as RoutesWrapper } from 'react-router-dom';
import Confirmacao from 'pages/Confirmacao';
import CriarConta from 'pages/CriarConta';
import ContaSucesso from 'pages/ContaSucesso';
import RecuperarSenha from 'pages/RecuperarSenha';
import ResetarSenha from 'pages/ResetarSenha';
import SenhaAlterada from 'pages/SenhaAlterada';
import Funcionarios from 'pages/Funcionarios';
import Cargos from 'pages/Cargos';
import DeptoTI from 'pages/Depto_Selecionado';
import User from 'pages/User';
import UserEdit from 'pages/UserEdit';
import Administrador from 'pages/Administrador';
import AdministradorEdit from 'pages/AdministradorEdit';
import Colab_home from 'pages/Colaborador_home';
import Colab_onboard from 'pages/Colaborador_onboard';
import Colab_user from 'pages/Colaborador_user';
import Consultor from 'pages/Consultor_Tela';
import Org from 'pages/Organograma';
import Adm_Home from 'pages/ADM_Home';
import Cursos from 'pages/Curso_Tela';
import Teste from 'pages/Modulo_Tela';

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
      <Route path="/Departamento/:id" element={<DeptoTI />} />
      <Route path="/User/:id" element={<User />} />
      <Route path="/UserEdit/:id" element={<UserEdit />} />
      <Route path="/Administrador" element={<Administrador />} />
      <Route path="/AdministradorEdit" element={<AdministradorEdit />} />
      <Route path="/Consultor" element={<Consultor />} />
      {/* <Route path="/Organograma" element={<Org />} /> */}
      <Route path="/Organograma/:dep" element={<Org />} />
      <Route path="/Adm_home" element={<Adm_Home />} />
      <Route path="/Curso_Tela/:id" element={<Cursos />} />
      <Route path="/curso_modulos/:id" element={<Teste />} />
    </RoutesWrapper>
    // </BrowserRouter>
  );
}

export default Routes;
