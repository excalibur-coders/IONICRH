import { theme } from 'theme';
import { BsClipboardCheck } from 'react-icons/bs';

import * as S from './styles';
import { Button } from '@chakra-ui/react';
import Footer from 'components/Footer';
import RespBar from 'components/RespBar';
//import * as S from './styles';

function Colab_onboard() {
  return (
    <>
      <S.Container>
        <RespBar />
        <main>
          <h1>Cursos</h1>
          <div className="buttons_onboard">
            <div>
              <Button
                className="button"
                as={BsClipboardCheck}
                color={theme.colors.font}
              ></Button>
              <small>Curso RDC-16</small>
            </div>
            <div>
              <Button
                className="button"
                as={BsClipboardCheck}
                color={theme.colors.font}
              ></Button>
              <small>Curso 2</small>
            </div>
            <div>
              <Button
                className="button"
                as={BsClipboardCheck}
                color={theme.colors.font}
              ></Button>
              <small>Curso 3</small>
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

export default Colab_onboard;
