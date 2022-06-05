import {
  useState,
  ReactNode,
  useEffect,
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';
import Cookies from 'js-cookie';

import { useNavigate } from 'react-router-dom';

import { api } from 'services/api';

import { setCookie, parseCookies } from 'nookies';
import { IUser } from 'interfaces/IUser';

interface SignInProps {
  email: string;
  password: string;
}

interface AuthContextData {
  signOut: () => void;
  isAuthenticated: boolean;
  user: IUser | undefined;
  setUser: Dispatch<SetStateAction<IUser | undefined>>;
  signIn: (credentials: SignInProps) => Promise<void>;
}

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function signOut() {
  //const navigate = useNavigate();

  Cookies.remove('ionicookie.token');
  Cookies.remove('ionicookie.user_id');
  //navigate('/Colab_home');
}

export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();

  const [user, setUser] = useState<IUser>();

  const isAuthenticated = !!user;

  useEffect(() => {
    const isAuthenticated = !!user;

    const { 'ionicookie.token': token, 'ionicookie.user_id': user_id } =
      parseCookies();

    if (token) {
      api
        .get('user/usuario-perfil', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          setUser(data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, []);

  interface ISession {
    token: string;
    user: IUser;
  }

  async function signIn({ email, password }: SignInProps) {
    try {
      const { data } = await api.post<IUser>('user/login', {
        user_email: email,
        password: password,
      });

      setCookie(null, 'ionicookie.token', data.token as string, {
        maxAge: 60 * 60 * 24,
        path: '/',
      });

      setCookie(null, 'ionicookie.user_id', String(data.user_id), {
        maxAge: 60 * 60 * 24,
        path: '/',
      });

      setUser(data);

      // console.log(data?.user_role?.[0])
      if (data?.user_role?.[0] === 'Administrador') navigate('/Adm_home');
      else if (
        (data?.user_nome,
        data?.user_cpf,
        data?.user_rg,
        data?.user_nacionalidade,
        data?.user_nascimento,
        data?.user_naturalidade,
        data?.user_genero,
        data?.user_raca,
        data?.user_estado_civil)
       && data?.user_role?.[0] != 'Consultor') {
        navigate('/Colab_home');
      } else if (data?.user_role?.[0] === 'Consultor') {
        navigate('/Consultor_home');
      }
       else navigate('/Cadastro_colaborador');
    } catch (error) {
      alert('Parece que o usuário ou senha está incorreta.');
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
        setUser,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
