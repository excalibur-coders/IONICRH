import * as S from './styles';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';

interface featureProps {
  title?: string;
  desc?: string;
  value?: number;
}

function Card_Curso({ desc, title, value }: featureProps) {
  return (
    <S.Container>
      <div className="texto">
        <div className="tittle">
          <h1>{title}</h1>
        </div>
        <div className="desc">
          <h1>{desc}</h1>
        </div>
      </div>
      <div className="test">
        <CircularProgress value={value} color="blue.400" size="80px">
          <CircularProgressLabel>{`${value}%`}</CircularProgressLabel>
        </CircularProgress>
      </div>
    </S.Container>
  );
}

export default Card_Curso;
