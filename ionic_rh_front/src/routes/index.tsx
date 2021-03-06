import Cadastro from 'pages/Cadastro_Colaborador';
import Login from 'pages/Login';
import Departamentos from 'pages/Departamentos';
import { Route, Routes as RoutesWrapper } from 'react-router-dom';
import Confirmacao from 'pages/Confirmacao';
import CriarConta from 'pages/CriarConta';
import ContaSucesso from 'pages/ContaSucesso';
import ContaAtualizada from 'pages/ContaAtualizada';
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
import Consultor_Home from 'pages/Consultor_Home';
import Cadastrar_Curso from 'pages/Cadastrar_Curso';
import Cursos from 'pages/Curso_Tela';
import Consultor_Funcionarios from 'pages/Consultor_Funcionario';
import CadastrarCursoModulo from 'pages/Cadastrar_Modulo'
import CadastrarCursoTrilha from 'pages/Cadastrar_CursoTrilha'
import CadastrarUserTrilha from 'pages/Cadastrar_UserTrilha'
// import CadastrarDocumentosModulo from 'pages/Cadastrar_DocsModulo'
import InserirDocsModulos from 'pages/InserirDocsModulos'
import CadastrarTrilha from 'pages/Cadastrar_Trilha'
import EditarModulo from 'pages/Editar_modulo'
import ModuloCurso from 'pages/Modulo_Tela';
import Cadastro_Curso_adm from 'pages/Cadastro_Curso_adm';
import Todos_Cursos from 'pages/Todos_Cursos';
import ModuloTela from 'pages/Modulo_Tela';

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
      <Route path="/ContaAtualizada" element={<ContaAtualizada />} />
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
      <Route path="/Consultor_home" element={<Consultor_Home />} />
      <Route path="/Cadastrar_curso" element={<Cadastrar_Curso />} />
      <Route path="/Consultor_Funcionarios/:id" element={<Consultor_Funcionarios />} />
      {/* <Route path="/Organograma" element={<Org />} /> */}
      <Route path="/Organograma/:dep" element={<Org />} />
      <Route path="/Adm_home" element={<Adm_Home />} />
      <Route path="/Curso_Tela/:id" element={<Cursos />} />
      <Route path="/curso_modulos/:id" element={<ModuloCurso />} />
      {/* <Route path="/modulo_docs/:id" element={<CadastrarDocumentosModulo />} /> */}
      <Route path="/modulo_docs" element={<InserirDocsModulos />} />
      <Route path="/editar_modulo/:id" element={<EditarModulo />} />
      <Route path="/criar_modulos/" element={<CadastrarCursoModulo />} />
      <Route path="/criar_trilha/" element={<CadastrarTrilha />} />
      <Route path="/curso_trilha/" element={<CadastrarCursoTrilha />} />
      <Route path="/user_trilha/" element={<CadastrarUserTrilha />} />
      <Route path="/cadastro_curso_adm/" element={<Cadastro_Curso_adm />} />
      <Route path="/cursos/" element={<Todos_Cursos />} />
      <Route path="/curso_modulos/:id" element={<ModuloTela />} />

    </RoutesWrapper>
    // </BrowserRouter>
  );
}

export default Routes;
