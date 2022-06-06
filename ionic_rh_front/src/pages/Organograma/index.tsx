import React from 'react';
import './styles.ts';
import Chart from './components/Chart';

import * as S from './styles';
import RespBar_adm from 'components/Respbar_adm';
import { useParams } from 'react-router-dom';
import Sidemenu from 'components/sideMenu';
import LogoGray from 'assets/svg/logo-gray.svg'

export default function App() {
  const { dep } = useParams();

  return (
    <>
      <RespBar_adm />
      <S.Container >
        <div className="side">
          <Sidemenu />
        </div>
        <S.CenterContainer>
          <img src={LogoGray} />
          <h3>
            {dep === 'ti' ? (
              'IT Infrastructure Ops'
            ) : dep === 'marketing' ? (
              'Marketing Institucional'
            ) : 'Administrative & Financial'}
          </h3>
          <Chart depName={dep} />
        </S.CenterContainer>
      </S.Container>
    </>
  );
}
