import Login from 'pages/Login';
import { Route, BrowserRouter, Routes as RoutesWrapper } from 'react-router-dom';

function Routes() {
  return (
    <BrowserRouter>
      <RoutesWrapper>
        <Route path="/" element={<Login />} />
      </RoutesWrapper>
    </BrowserRouter>
  )
}

export default Routes;
