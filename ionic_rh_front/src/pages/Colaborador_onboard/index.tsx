import { theme } from 'theme';
import { BsClipboardCheck } from 'react-icons/bs';

import * as S from './styles';
import { Button } from '@chakra-ui/react';
import Footer from 'components/Footer';
import RespBar from 'components/RespBar';
import { useContext, useEffect, useState } from 'react';
import { parseCookies } from 'nookies';
import { AuthContext } from 'hooks/useAuth';
import { useParams } from 'react-router-dom';
//import * as S from './styles';




function Colab_onboard() {

  const { user } = useContext(AuthContext);
  const cookies = parseCookies();
  // const [user, setUser] = useState<IUser>();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {//
  },[])


  return (
    <>
      <S.Container>
        <RespBar />
        <main>
          <h1>Cursos</h1>
            <div className="buttons_onboard">
              {user?.junto?.map(Trilha => {
                return(
                  <>
                    <div>
                  <Button
                    className="button"
                    as={BsClipboardCheck}
                    color={theme.colors.font}
                  ></Button>
                  <small key={Trilha.trilha_nome}>{Trilha.trilha_nome}</small>
                    </div>
                  </>
                ) 
              })}
            </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </S.Container>
    </>
  );
}

export default Colab_onboard;
