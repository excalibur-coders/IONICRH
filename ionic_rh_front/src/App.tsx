import Routes from 'routes';

import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from 'hooks/useAuth';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
