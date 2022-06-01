import RespBar from 'components/RespBar';
import { useContext } from 'react';
import {
  MdAccountCircle,
  MdOutlinePlayCircleOutline,
  MdArrowForward,
} from 'react-icons/md';
import { theme } from 'theme';
import * as S from './styles';
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from '@chakra-ui/react';
import Button from 'components/Button';
import Footer from 'components/Footer';

import { AuthContext } from 'hooks/useAuth';

function Colab_home() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <S.Container>
        <RespBar />
        <main>
          <div className="welcome">
            <h1>Olá, {user?.user_nome}</h1>
            <h2>
              É um prazer tê-lo em nossa plataforma <br />
              Continue sua trilha de aprendizado na empresa
            </h2>
          </div>

          <div className="blocs">
            <div className="course">
              <div className="leftcourse">
                <h1>Low Code</h1>
                <h2>Boas práticas de programação</h2>
              </div>
              <div className="rightcourse">
                <h1>
                  Continuar <br />
                  Assistindo
                </h1>
                <MdOutlinePlayCircleOutline size="70" />
              </div>
            </div>
            <div className="inferior">
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
                <div className="perfil_i">
                  <h1>Trilha de aprendizado:</h1>
                  <RangeSlider
                    aria-label={['min', 'max']}
                    colorScheme={theme.colors.secundary}
                    defaultValue={[0, 10]}
                  >
                    <RangeSliderTrack>
                      <RangeSliderFilledTrack />
                    </RangeSliderTrack>
                    <RangeSliderThumb index={0} />
                    <RangeSliderThumb index={1} />
                  </RangeSlider>
                </div>
              </section>
              <section className="projeto">
                <h1> Projetos Recentes</h1>
                <h2>&quot;Nome projeto&quot;</h2>
                <h3>&quot;Descrição projeto&quot;</h3>
                <Button
                  text="Acessar Projeto"
                  color={theme.colors.font}
                ></Button>
              </section>
              <section className="others">
                <h1>Outros Projetos</h1>
                <h2>Saiba mais</h2>
                <a href="/Consultor_Funcionarios">
                  <MdArrowForward
                    size={70}
                    color={theme.colors.font}
                    margin-top={50}
                  />
                </a>
              </section>
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
