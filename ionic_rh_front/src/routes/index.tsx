import Login from 'pages/Login';
import CriarConta from 'pages/CriarConta';
import ContaSucesso from 'pages/ContaSucesso';
import RecuperarSenha from 'pages/RecuperarSenha';
import ResetarSenha from 'pages/ResetarSenha';
import SenhaAlterada from 'pages/SenhaAlterada';

import { Route, BrowserRouter, Routes as RoutesWrapper } from 'react-router-dom';

import Colab_home from 'pages/Colaborador_home';
import Colab_onboard from 'pages/Colaborador_onboard';

function Routes() {
  return (
    <BrowserRouter>
      <RoutesWrapper>
        <Route path="/" element={<Login />} />
        <Route path="/Cadastro" element={<CriarConta />} />
        <Route path="/ContaSucesso" element={<ContaSucesso />} />
        <Route path="/RecuperarSenha" element={<RecuperarSenha />} />
        <Route path="/Resetar" element={<ResetarSenha />} />
        <Route path="/SenhaAlterada" element={<SenhaAlterada />} />
        <Route path="/Colab_home" element={<Colab_home />} />
        <Route path="/Colab_onboard" element={<Colab_onboard />} />
      </RoutesWrapper>
    </BrowserRouter>
  )
}

export default Routes;
