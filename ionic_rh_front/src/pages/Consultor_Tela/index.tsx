import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import IonicLogo from 'assets/svg/ionicrh_logo_gray.svg';
import LogoGray from 'assets/svg/logo-gray.svg';
import { theme } from 'theme';

import * as S from './styles';
import Button from 'components/Button';
import { render } from '@testing-library/react';
import Card_Curso from 'components/Card_Cursos';
import Consultor_nav from 'components/Consultor_nav';
import { Progress } from '@chakra-ui/react';

interface ConsultorProps {
  value?: number;
  valueGeralObrigatorio?: number;
  valueGeral?: number;
}

function Consultor({
  value,
  valueGeralObrigatorio,
  valueGeral,
}: ConsultorProps) {
  return (
    <>
      <S.Container>
        <header>
          <Consultor_nav />
        </header>
        <main>
          <div className="linha">
            <div className="porcent_obrigatorio">
              <h1>
                Trilha de aprendizado obrigatoria: {`${valueGeralObrigatorio}%`}
              </h1>{' '}
              {/*passar esse valor pra baixo com {valueGeralObrigatorio} ou do jeito que escolherem posteriormente (na hr de integrar)*/}
              <div className="test">
                <Progress value={80} colorScheme="blue" size="lg" />
              </div>
            </div>

            <div className="porcent_geral">
              <h1>Trilha de aprendizado geral: {`${valueGeral}%`}</h1>{' '}
              {/*passar esse valor pra baixo com {valueGeral}*/}
              <div className="test">
                <Progress value={80} colorScheme="blue" size="lg" />
              </div>
            </div>
          </div>
          <div className="cards">
            <h2>Cursos Obrigatórios</h2>{' '}
            {/*passar esse valor pra baixo com {value}*/}
            <Card_Curso
              title="Low Code"
              desc="skadoasdkawodasolfsfasdjaosdkawdkasodkaodkasodkawodkasodkawodkasdasijdiajsdjiasjdmkasdasd"
              value={80}
            />
            <Card_Curso
              title="Manual/Regras da empresa"
              desc="skadoasdkawodasolfsfasdjaosdkawdkasodkaodkasodkawodkasodkawodkasdasijdiajsdjiasjdmkasdasd"
              value={100}
            />
            <Card_Curso
              title="Logica Geral de Programação"
              desc="skadoasdkawodasolfsfasdjaosdkawdkasodkaodkasodkawodkasodkawodkasdasijdiajsdjiasjdmkasdasd"
              value={100}
            />
          </div>

          <div className="cards">
            <h2>Cursos Complementares</h2>
            <Card_Curso
              title="JavaScript"
              desc="skadoasdkawodasolfsfasdjaosdkawdkasodkaodkasodkawodkasodkawodkasdasijdiajsdjiasjdmkasdasd"
              value={80}
            />
            <Card_Curso
              title="Flask"
              desc="skadoasdkawodasolfsfasdjaosdkawdkasodkaodkasodkawodkasodkawodkasdasijdiajsdjiasjdmkasdasd"
              value={90}
            />
            <Card_Curso
              title="TypeScript"
              desc="skadoasdkawodasolfsfasdjaosdkawdkasodkaodkasodkawodkasodkawodkasdasijdiajsdjiasjdmkasdasd"
              value={100}
            />
          </div>
        </main>
      </S.Container>
    </>
  );
}

export default Consultor;
