import Consultor_nav from 'components/Consultor_nav';
import Input from '../../components/Input'
import Button from 'components/Button';
import { theme } from 'theme';
import * as yup from 'yup';
import react from 'react';
import * as S from './styles'

function Cadastrar_Curso() {

  const schema = yup.object({
    nomecurso: yup.string().required('Necessário preencher o nome do curso'),
    descricaocurso: yup.string().required('Necessário preencher a descrição do curso'),
    duracaocurso: yup.number().required('Necessário preencher a duração do curso')
  });

  return (
    <>
      <S.Container>
        <header>
          <Consultor_nav/>
        </header>
        <main>
          <h1>Cadastrar novo curso</h1>
          <form>
            <div className="field">
              <Input
                  size="sm"
                  width="22rem"
                  fontSize={20}
                  fontWeight="bold"
                  labelText="Nome do curso:"
                  type="string"
                />
            </div>
            <div className="field">
            <Input
                  size="sm"
                  width="22rem"
                  fontSize={20}
                  fontWeight="bold"
                  labelText="Descrição do curso:"
                  type="string"
                />
            </div>
            <div className="field">
            <Input
                  size="sm"
                  width="22rem"
                  fontSize={20}
                  fontWeight="bold"
                  labelText="Duração do curso"
                  type="number"
                  min={5}
                  max={10}
                />
            </div>
            <h1> Upload dos arquivos </h1>
            <div className="field">
            <Input
                  size="sm"
                  width="22rem"
                  fontSize={20}
                  fontWeight="bold"
                  labelText="Modulo 1:"
                  type="file"
                  multiple
                />
            </div>
            <div className="field">
            <Input
                  size="sm"
                  width="22rem"
                  fontSize={20}
                  fontWeight="bold"
                  labelText="Modulo 2:"
                  type="file"
                  multiple
                />
            </div>
            <div className="field">
            <Input
                  size="sm"
                  width="22rem"
                  fontSize={20}
                  fontWeight="bold"
                  labelText="Modulo 3:"
                  type="file"
                  multiple
                />
            </div>
            <Button
              text="Cadastrar"
              color={theme.colors.primary}
              type="submit"
            />
          </form>
        </main>
      </S.Container>
    </>
  );
}

export default Cadastrar_Curso;
