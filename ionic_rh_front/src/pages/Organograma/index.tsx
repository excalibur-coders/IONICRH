import React from 'react';
import './styles.ts';
import Chart from './components/Chart';

import { useEffect, useState, useCallback } from 'react';
import { theme } from 'theme';

import * as S from './styles';
import RespBar_adm from 'components/Respbar_adm';

export default function App() {
  return (
    <>
      <div>
        <RespBar_adm />
      </div>
      <S.Container>
        <div className="Center">
          <h3>Departamento de Desenvolvimento</h3>
          <Chart />
        </div>
      </S.Container>
    </>
  );
}
