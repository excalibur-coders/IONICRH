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
            <div className="text">
            <h1>Olá, {user?.user_nome}</h1>
            <h2>
              É um prazer tê-lo em nossa plataforma <br />
              Continue/Comece sua trilha de aprendizado na empresa
            </h2>
            </div>
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
          </div>

          <div className="blocs">
            <div className="course">
              <div className="leftcourse">
                <h1>Nome curso</h1>
                <h2>Descrição curso</h2>
              </div>
              <div className="rightcourse">
                <h1>
                  Assistir <br/> curso
                </h1>
                <MdOutlinePlayCircleOutline size="70" />
              </div>
            </div>
            <div className="inferior">

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
