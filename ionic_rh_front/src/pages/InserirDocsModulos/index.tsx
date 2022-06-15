import Consultor_nav from 'components/Consultor_nav';
import Input from '../../components/Input'
import Button from 'components/Button';
import { theme } from 'theme';
import * as yup from 'yup';
import react, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import * as S from './styles'
import { api } from 'services/api';
import { parseCookies } from 'nookies';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { Box, HStack, Select } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';


interface IModuloCadastro {
  curso_id: number;
  modulo_id: number;
}


interface ICurso {
  curso_id: number;
  curso_nome: string;
}

interface IModulo {
  modulo_id: number,
  modulo_nome: string,
  cursoCursoId: number,
}

function InserirDocsModulos() {

  const cookies = parseCookies();
  const navigate = useNavigate();
  const [selectedCurso, setSelectedCurso] = useState('');
  const [selectedModulo, setSelectedModulo] = useState('');
  const [cursos, setCursos] = useState<ICurso[]>([])
  const [modulos, setModulos] = useState<IModulo[]>([])
  const [file, setFile] = useState<File>();

  const schema = yup.object({
    curso_id: yup.string().required('Necessário selecionar um curso'),
    modulo_id: yup.string().required('Necessário selecionar um módulo'),
  });

  const getCursos = useCallback(() => {
    api
      .get('/curso/ver-cursos', {
        headers: {
          Authorization: `Bearer ${cookies['ionicookie.token']}`,
        },
      })
      .then(({ data }) => {
        setCursos(data);
      })
      .catch((error: Error | AxiosError) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getCursos();
  }, []);

  useEffect(() => {
    console.log('curso selecionado ', selectedCurso)
    api
      .get(`/curso/find-modulo-id/${selectedCurso}`, {
        headers: {
          Authorization: `Bearer ${cookies['ionicookie.token']}`,
        },
      })
      .then(({ data }) => {
        console.log('resposta: ', data);
        setModulos(data);
      })
      .catch((error: Error | AxiosError) => {
        console.log(error);
      });
  }, [selectedCurso])

  const handleSaveFile = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  }, []);

  const handleUploadAvatar = useCallback(async () => {
    const formData = new FormData();

    formData.append('file', file as string | Blob);

    console.log(formData.getAll('file'));

    await api
      .post(`/curso/adicionar-material/${selectedModulo}`, formData, {
        headers: {
          Authorization: `Bearer ${cookies['ionicookie.token']}`,
        },
      })
      .then(({ status }) => {
        alert('Conteúdo cadastrado com sucesso!');
        console.log('status: ', status);
      })
      .catch(error => {
        console.log('error: ', error);
      });
  }, [cookies, file, selectedModulo]);


  // console.log(modulos);

  return (
    <>
      <S.Container>
        <header>
          <Consultor_nav />
        </header>
        <main>
          <h1>Colaborador Trilha</h1>
          <div className='form'>
            <Select
              placeholder={
                'Selecione o curso'
              }
              value={selectedCurso}
              onChange={(e: React.FormEvent<HTMLSelectElement>) => setSelectedCurso(e.currentTarget.value)}
            >
                {cursos.map(curso => (
                  <option key={curso.curso_id} value={curso.curso_id} >
                  {curso.curso_nome}
                </option>
                ))}
            </Select>
            <div className="field">
              <Select
                placeholder={
                  'Selecione o módulo'
                }
                value={selectedModulo}
                onChange={(e: React.FormEvent<HTMLSelectElement>) => setSelectedModulo(e.currentTarget.value)}
              >
                {modulos.map(modulo => (
                  <option key={modulo.modulo_id} value={modulo.modulo_id} >
                  {modulo.modulo_nome}
                </option>
                ))}
              </Select>
              <Input
                  size="sm"
                  width="22rem"
                  fontSize={20}
                  fontWeight="bold"
                  labelText="Arquivo"
                  type="file"
                  onChange={handleSaveFile}
                />
            </div>
            {/*  */}
            <div className='buttonsWrapper'>
              <Button
                text="Cadastrar"
                color={theme.colors.primary}
                onClick={() => handleUploadAvatar()}
              />
              <Button
                text="voltar"
                color={theme.colors.red}
                onClick={() => navigate(-1)}
              />
            </div>
          </div>
        </main>
      </S.Container>
    </>
  );
}

export default InserirDocsModulos;
