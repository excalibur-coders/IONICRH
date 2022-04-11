import Colab_Nav from 'components/Colab_Nav';
import { ReactNode } from 'react';
import { MdAccountCircle, MdOutlinePlayCircleOutline, MdArrowForward } from 'react-icons/md';
import { theme } from 'theme';
import * as S from './styles';
import { RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, color } from '@chakra-ui/react'
import Button from 'components/Button';
import Footer from 'components/Footer';

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
                    <MdOutlinePlayCircleOutline size='70' />
                  </div>
              </div>
                <div className='inferior'>
                  <div className='perfil'>
                      <div className='perfil_s'>
                          <div className='foto'>
                              <MdAccountCircle size={100} color={theme.colors.font}/>
                          </div>
                          <div className='myperfil'>
                              <h1>Meu Perfil</h1>
                              <Button text="Editar Perfil" color={theme.colors.font}></Button>
                          </div>
                      </div>
                      <div className='perfil_i'>
                          <h1>Trilha de aprendizado:</h1>
                          <RangeSlider aria-label={['min', 'max']} colorScheme={theme.colors.secundary} defaultValue={[0, 10]}>
                          <RangeSliderTrack>
                            <RangeSliderFilledTrack />
                          </RangeSliderTrack>
                          <RangeSliderThumb index={0} />
                          <RangeSliderThumb index={1} />
                        </RangeSlider>
                      </div>
                  </div>
                    <div className='projeto'>
                      <h1> Projetos Recentes</h1>
                      <h2>"Nome projeto"</h2>
                      <h3>"Descrição projeto"</h3>
                      <Button text='Acessar Projeto' color={theme.colors.font}></Button>
                    </div>
                    <div className='others'>
                    <h1>Outros Projetos</h1>
                    <h2>Saiba mais</h2>
                    <a href=''><MdArrowForward size={70} color={theme.colors.font} margin-top={50} /></a>
                    </div>
                </div>
        </S.Container>
        <Footer/>
    </>


  )
}

export default Colab_home;