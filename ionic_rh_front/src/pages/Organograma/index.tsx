import React from 'react';
import './styles.ts';
import Chart from './components/Chart';
import Navbar from 'components/navbar';

import { useEffect, useState, useCallback } from 'react';
import { theme } from 'theme';

import * as S from './styles';

export default function App() {
  return (
    <>
      <div>
        <Navbar />
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
