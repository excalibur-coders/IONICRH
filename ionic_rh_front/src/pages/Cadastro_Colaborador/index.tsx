import { ReactNode } from 'react';

import { useCallback, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import Input from 'components/Input';
import IonicLogo from 'assets/svg/ionicrh_logo_gray.svg';
import { theme } from 'theme';
import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react'

import { parseCookies } from "nookies";

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

import * as S from './styles';
import Button from 'components/Button';
import { tmpdir } from 'os';

import { AuthContext } from "hooks/useAuth";
import { api } from 'services/api';
import internal from 'stream';

interface InputsProps {
    nomecompleto: string;
    nacionalidade: string;
    naturalidade: string;
    nascimento: number;
    genero: string;
    cpf: number;
    rg: number;
    estadocivil: string;
    rua: string;
    cep: number;
    bairro: string;
    cidade: string;
    estado: string;
    numero: string;
    complemento: string;
    email: string;
    telefone: number;
    formacao: string;
    cursoscomp: string;
}

// console.log(theme.colors.primary);

function Cadastro() {
    const cookies = parseCookies();
    
    const { signIn } = useContext(AuthContext);

    const authRoute = () => {
        api.get('/departamentos', {
          headers: {
            Authorization: `Bearer ${cookies['ionicookie.token']}`,
          }
        }).then(({data}) => {
          console.log(data);
        }).catch(error => {
          console.log(error);
        })
      }

      const onSubmit = useCallback(async (data: InputsProps) => {
        return await signIn(data);
      }, []);

      const schema = yup.object({
        nomecompleto: yup.string().required('Nome completo obrigatório!'),
        nacionalidade: yup.string().required('Nacionalidade obrigatória!'),
        naturalidade: yup.string().required('Naturalidade obrigatória!'),
        estadocivil: yup.string().required('Estado civil obrigatório!'),
        rua: yup.string().required('Rua obrigatória!'),
        bairro: yup.string().required('Bairro obrigatório!'),
        cidade: yup.string().required('Cidade obrigatória!'),
        estado: yup.string().required('Estado obrigatório!'),
        numero: yup.string().required('Número obrigatório!'),
        complemento: yup.string().required('Complemento obrigatório!'),
        email: yup.string().required('E-mail obrigatório!'),
        formacao: yup.string().required('Formação obrigatória!'),
        nascimento: yup.number().required('Data de nascimento obrigatória!'),
        cpf: yup.number().required('CPF obrigatório!'),
        rg: yup.number().required('RG obrigatório!'),
        cep: yup.number().required('CEP obrigatório!'),
        telefone: yup.number().required('Telefone obrigatório!'),
      }).required();

      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<InputsProps>({
        mode: 'onBlur',
        resolver: yupResolver(schema),
      });

    return (
        <S.Container>
            <div className='header'>
                <img src={IonicLogo} />
                <h1>Cadastro</h1>
            </div>  
            <div className='main'>
                <div className="mainWrapper"> 
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className='leftWrapper'>
                        <div className='form'>
                            <Input 
                            size='sm' 
                            width="auto" 
                            fontSize={20} 
                            labelText="Nome Completo" 
                            type="text" 
                            error={errors.nomecompleto?.message} 
                            {...register('nomecompleto')}
                            />

                            <div className='form-row'>
                                <Input 
                                size='sm' 
                                width="14rem" 
                                fontSize={20} 
                                labelText="Nacionalidade" 
                                type="text" 
                                error={errors.nacionalidade?.message} 
                                {...register('nacionalidade')}
                                />

                                <Input 
                                size='sm' 
                                width="14rem" 
                                fontSize={20} 
                                labelText="Naturalidade" 
                                type="text" 
                                error={errors.naturalidade?.message} 
                                {...register('naturalidade')}
                                />

                            </div>

                            <div className='form-row'>

                                <Input 
                                 size='sm'
                                 width="14rem" 
                                 fontSize={20} 
                                 labelText="Nascimento" 
                                 type="text" 
                                 error={errors.nascimento?.message} 
                                 {...register('nascimento')}
                                 />

                                <Input 
                                size='sm' 
                                width="14rem" 
                                fontSize={20} 
                                labelText="Gênero" 
                                />

                            </div>

                            <div className='form-row'>
                                <Input 
                                size='sm' 
                                width="14rem" 
                                fontSize={20} 
                                labelText="CPF" 
                                type="text" 
                                error={errors.cpf?.message} 
                                {...register('cpf')}
                                />

                                <Input 
                                size='sm' 
                                width="14rem" 
                                fontSize={20} 
                                labelText="RG" 
                                type="text" 
                                error={errors.rg?.message} 
                                {...register('rg')}
                                />

                            </div>

                            <Input 
                            size='sm' 
                            width="auto" 
                            fontSize={20} 
                            labelText="Estado Civil" 
                            type="text" 
                            error={errors.estadocivil?.message} 
                            {...register('estadocivil')}
                            />

                            <Input 
                            size='sm' 
                            width="auto" 
                            fontSize={20} 
                            labelText="Rua" 
                            type="text" 
                            error={errors.rua?.message} 
                            {...register('rua')}
                            />

                            <div className='form-row'>
                                <Input 
                                size='sm' 
                                width="14rem" 
                                fontSize={20} 
                                labelText="CEP" 
                                type="text" 
                                error={errors.cep?.message} 
                                {...register('cep')}
                                />

                                <Input 
                                size='sm' 
                                width="14rem" 
                                fontSize={20} 
                                labelText="Bairro" 
                                type="text" 
                                error={errors.bairro?.message} 
                                {...register('bairro')}
                                />

                            </div>
                        </div>
                </div>

                <div className='rightWrapper'>
                    <div className='form'>
                        <div className='form-row'>
                            <Input 
                            size='sm' 
                            width="14rem" 
                            fontSize={20} 
                            labelText="Cidade" 
                            type="text" 
                            error={errors.cidade?.message} 
                            {...register('cidade')}
                            />

                            <Input 
                            size='sm' 
                            width="14rem" 
                            fontSize={20} 
                            labelText="Estado" 
                            type="text" 
                            error={errors.estado?.message} 
                            {...register('estado')}
                            />

                        </div>

                        <div className='form-row'>
                            <Input 
                            size='sm' 
                            width="14rem" 
                            fontSize={20} 
                            labelText="Número" 
                            type="text" 
                            error={errors.numero?.message} 
                            {...register('numero')}
                            />

                            <Input 
                            size='sm' 
                            width="14rem" 
                            fontSize={20} 
                            labelText="Complemento" 
                            type="text" 
                            error={errors.complemento?.message} 
                            {...register('complemento')}
                            />
                            
                        </div>

                        <Input 
                        size='sm' 
                        width="auto" 
                        fontSize={20} 
                        labelText="E-mail" 
                        type="text" 
                        error={errors.email?.message} 
                        {...register('email')}
                        />

                        <Input 
                        size='sm' 
                        width="auto" 
                        fontSize={20} 
                        labelText="Telefone" 
                        type="text" 
                        error={errors.telefone?.message} 
                        {...register('telefone')}
                        />

                        <Input 
                        size='sm' 
                        width="auto" 
                        fontSize={20} 
                        labelText="Formação" 
                        type="text" 
                        error={errors.formacao?.message} 
                        {...register('formacao')}
                        />

                        <Input 
                        size='sm' 
                        width="auto" 
                        fontSize={20} 
                        labelText="Cursos Complementares"
                         />

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
                </form>
            </div>
                 <div className='ButtonW'>
                 <Button 
                 text='Finalizar Cadastro' 
                 color={theme.colors.primary} 
                 type="submit"
                 />
                 <Button 
                 text="rota autenticação"
                 color={theme.colors.primary} 
                 onClick={() => authRoute()} 
                 />
                 </div>
            </div>
                   
            
        </S.Container>
    )
}

export default Cadastro;