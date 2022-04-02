import Colab_Nav from 'components/Colab_Nav';
import { ReactNode } from 'react';
import { theme } from 'theme';
import * as S from './styles';

function Colab_home(){
  return (
    <>
        <Colab_Nav/>
        <S.Container>
            <div className='welcome'>
              <h1>Olá, User</h1>
              <h2>É um prazer tê-lo em nossa plataforma <br/>
                Continue sua trilha de aprendizado na empresa
              </h2>
            </div>
              <div className='course'>
                  <div className='leftcourse'>
                    <h1>Low Code</h1>
                    <h2>Boas práticas de programação</h2>
                  </div>
                  <div className='rightcourse'>
                    <h1>Continuar <br/>Assistindo</h1>
                  </div>
              </div>
                <div className='inferior'>
                  <div className='perfil'>
                    <h1></h1>
                  </div>
                  <div className='projeto'>
                  <h1></h1>
                  </div>
                  <div className='others'>
                  <h1></h1>
                  </div>
                </div>
        </S.Container>
    </>


  )
}

export default Colab_home;
