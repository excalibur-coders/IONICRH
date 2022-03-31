import Login from 'pages/Login';
import PerfilAdmin from 'pages/Perfil_Admin';
import { Route, BrowserRouter, Routes as RoutesWrapper } from 'react-router-dom';

function Routes() {
  return (
    <BrowserRouter>
      <RoutesWrapper>
        <Route path="/" element={<Login />} />
        <Route path="/gerenciamento" element={<PerfilAdmin />} />
      </RoutesWrapper>
    </BrowserRouter>
  )
}

export default Routes;
