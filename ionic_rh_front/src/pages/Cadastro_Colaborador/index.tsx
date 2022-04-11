import { ReactNode } from 'react';

import Input from 'components/Input';
import IonicLogo from 'assets/svg/ionicrh_logo_gray.svg';
import { theme } from 'theme';
import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react'

import * as S from './styles';
import Button from 'components/Button';
import { tmpdir } from 'os';

// console.log(theme.colors.primary);

function Cadastro() {
    return (
        <S.Container>
            <div className='header'>
                <img src={IonicLogo} />
                <h1>Cadastro</h1>
            </div>  
            <div className='main'>
                <div className="mainWrapper"> 
                <div className='leftWrapper'>
                        <div className='form'>
                            <Input size='sm' width="auto" fontSize={20} labelText="Nome Completo" />
                            <div className='form-row'>
                                <Input size='sm' width="14rem" fontSize={20} labelText="Nacionalidade" />
                                <Input size='sm' width="14rem" fontSize={20} labelText="Naturalidade" />
                            </div>
                            <div className='form-row'>
                                <Input size='sm' width="14rem" fontSize={20} labelText="Nascimento" />
                                <Input size='sm' width="14rem" fontSize={20} labelText="Gênero" />
                            </div>
                            <div className='form-row'>
                                <Input size='sm' width="14rem" fontSize={20} labelText="CPF" />
                                <Input size='sm' width="14rem" fontSize={20} labelText="RG" />
                            </div>
                            <Input size='sm' width="auto" fontSize={20} labelText="Estado Civil" />
                        </div>
                </div>

                <div className='rightWrapper'>
                    <div className='form'>
                        <Input size='sm' width="auto" fontSize={20} labelText="E-mail" />
                        <Input size='sm' width="auto" fontSize={20} labelText="Telefone" />
                        <Input size='sm' width="auto" fontSize={20} labelText="Formação" />
                        <Input size='sm' width="auto" fontSize={20} labelText="Cursos Complementares" />
                        <h2>Idiomas</h2>
                        <CheckboxGroup colorScheme='blue'>
                            <Stack spacing={[1, 5]} direction={['column', 'row']}>
                                <Checkbox value='ingles'>Inglês</Checkbox>
                                <Checkbox value='espanhol'>Espanhol</Checkbox>
                                <Checkbox value='outros'>Outros:</Checkbox>
                                <Input size='sm' width="auto" fontSize={15} labelText="" />
                            </Stack>
                        </CheckboxGroup>
                    </div>
                </div>
            </div>
                 <div className='ButtonW'>
                 <Button text='Finalizar Cadastro' color={theme.colors.primary} />
                 </div>
            </div>
                   
            
        </S.Container>
    )
}

export default Cadastro;