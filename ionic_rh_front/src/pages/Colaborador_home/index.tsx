import RespBar from 'components/RespBar';
import { useContext } from 'react';
import {
  MdAccountCircle,
} from 'react-icons/md';
import { BsClipboardCheck } from 'react-icons/bs'
import { theme } from 'theme';
import * as S from './styles';
import Button from 'components/Button';
import Footer from 'components/Footer';
import { AuthContext } from 'hooks/useAuth';
import { Link } from 'react-router-dom';

function Colab_home() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <S.Container>
        <RespBar />
        <main>
          <div className="welcome">
            <div className="text">
            <h1>Olá, {user?.user_nome}</h1>
            <h2>
              É um prazer tê-lo em nossa plataforma <br />
              Continue/Comece sua trilha de aprendizado na empresa
            </h2>
            </div>
          </div>
          <div className="blocs">

            <section className="perfil">
                <div className="perfil_s">
                  <div className="foto">
                    <MdAccountCircle size={100} color={theme.colors.font} />
                  </div>
                  <div className="myperfil">
                    <h1>Meu Perfil</h1>
                    <a href="/Colab_user">
                      <Button text="Perfil" color={theme.colors.font}></Button>
                    </a>
                  </div>
                </div>
              </section>

              <div className="course">
                <div className="leftcourse">
                  <h1>Trilha: {user?.junto?.[0].trilha_nome}</h1>
                  <a>
                  <Link to={`/Curso_Tela/${user?.junto?.[0].trilha_id}`}><BsClipboardCheck size="70" /><h2>Ver Trilha</h2></Link>
                  </a>
                </div>
            </div>
          </div>
        </main>

        <footer>
          <Footer />
        </footer>
      </S.Container>
    </>
  );
}

export default Colab_home;
