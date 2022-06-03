import Consultor_nav from 'components/Consultor_nav';
import Input from '../../components/Input'
import Button from 'components/Button';
import { theme } from 'theme';
import * as yup from 'yup';
import react, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import * as S from './styles'
import { api } from 'services/api';
import { parseCookies } from 'nookies';
import { useNavigate, useParams } from 'react-router-dom';
import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { Select } from '@chakra-ui/react';


interface IModulo {
  modulo_id: number;
  modulo_nome: string;
  docs_curso: IDocs[]
}
interface IDocs {
  docs_id: number;
  docs_nome: string;
  docs_url: string;
  docs_type: string;
}

function CadastrarCursoModulo() {

  const [docs, setDocs] = useState<File>();
  const cookies = parseCookies();
  const navigate = useNavigate();
  const { id } = useParams();
  const [modulo, setModulo] = useState<IModulo[]>([])


  const handleSaveDocs = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setDocs(e.target.files[0]);
  }, []);

  const handleUploadFile = useCallback(async () => {
    const formData = new FormData();

    formData.append('file', docs as string | Blob);

    console.log(formData.getAll('file'));

    await api
      .post(`/curso/adicionar-material/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${cookies['ionicookie.token']}`,
        },
      })
      .then(({ status }) => {
        console.log('status: ', status);
      })
      .catch(error => {
        console.log('error: ', error);
      });
  }, [cookies, docs, id]);


  const getModuloId = useCallback(() => {
    api
      .get(`/curso/find-modulo-id/${id}`, {
        headers: {
          Authorization: `Bearer ${cookies['ionicookie.token']}`,
        },
      })
      .then(({ data }) => {
        setModulo(data);
      })
      .catch((error: Error | AxiosError) => {
        console.log(error);
      });
  }, [cookies, id]);

  useEffect(() => {
    getModuloId();
  }, []);

  const { handleSubmit } = useForm()

  const onSubmit = useCallback(async () => {
    handleUploadFile()
  }, [handleUploadFile])

  return (
    <>
      <S.Container>
        <header>
          <Consultor_nav />
        </header>
        <main>
          <div className='position'>
            {/* <h1>{modulo[0].modulo_nome}</h1> */}
          </div>
          {modulo.map((i, k) => (
            <h1 key={k}>{i.modulo_nome}</h1>
          ))}
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              size="sm"
              width="22rem"
              fontSize={20}
              fontWeight="bold"
              labelText="Adicionar Documento ao modulo"
              type="file"
              multiple
              onChange={handleSaveDocs}
            />
            <Button
              text="Enviar Documento"
              color={theme.colors.primary}
              type="submit"
            />
          </form>
          {modulo.map(m => (
            m.docs_curso.map(d => (
              d.docs_nome
            ))
          ))}
        </main>
      </S.Container>
    </>
  );
}

export default CadastrarCursoModulo
