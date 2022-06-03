interface IContrato {
  cargo: ICargo;
  contrato_matricula?: string;
  contrato_auxilio_creche?: number;
  contrato_base?: string;
  contrato_data_desligamento?: string;
  contrato_distrato?: string;
  contrato_dominio?: string;
  contrato_faixa_salarial?: number;
  contrato_id?: number;
  contrato_plano_saude?: number;
  contrato_tempo_de_casa?: string;
  contrato_tempo_formalizacao?: string;
  contrato_termos?: string;
  contrato_adimissao?: string;
  contrato_vale_alimentacao?: number;
  contrato_vale_refeicao?: number;
  contrato_vale_transporte?: number;
  contrato_type?: string;
  contrato_nivel?: string;
  contrato_data_adicao?: string;
  contrato_tipo: string;
  emp_contratante: IEmpContratante;
  contrato_turno?: string;
  empContratanteContratanteId?: number;
  cargoCargoId?: number;
}

interface IEmpContratante {
  contratante_nome?: string;
}

interface ICargo {
  departamento?: IDepartamento;
  cargo_head?: string;
  cargo_nivel?: string;
  cargo_area?: string;
}

interface IDepartamento {
  dep_name?: string;
}

interface IEscolaridade {
  school_formacao?: string;
  school_status?: string;
  school_instituicao?: string;
  school_inicio?: string;
  school_termino?: string;
  school_curso?: string;
}

interface IIdioma {
  idioma_falados?: string;
}

interface ITelefone {
  tell_ddd?: string;
  tell_numero?: string;
}

interface IEndereco {
  endereco_rua?: string;
  endereco_id?: number;
  endereco_pais?: string;
  endereco_bairro?: string;
  endereco_cidade?: string;
  endereco_cep?: string;
  endereco_estado?: string;
  endereco_numero?: string;
  endereco_compl?: string;
}
interface IDocs {
  docs_nome: string;
  docs_url: string;
  docs_type: string;
  docs_header: string;
}
interface IAvatar {
  avatar_nome: string;
  avatar_url: string;
  avatar_type: string;
  avatar_header: string;
}
interface ITrilha {
  trilha_id: number;
  trilha_nome: string;
  juntos: ICurso[];
}
interface ICurso {
 curso_nome: string;
 curso_descricao: string;
 curso_criacao: string;
 curso_duracao: string;
}
export interface IUser {
  junto?: ITrilha[];
  user_id?: number;
  user_email?: string;
  user_nome?: string;
  user_nacionalidade?: string;
  user_naturalidade?: string;
  user_nascimento?: string;
  user_genero?: string;
  user_cpf?: string;
  user_estado_civil?: string;
  telefone?: ITelefone[];
  idioma?: IIdioma[];
  docsavatar: IAvatar[];
  docs?: IDocs[];
  escolaridade?: IEscolaridade[];
  endereco?: IEndereco[];
  contrato?: IContrato[];
  user_raca?: string;
  user_rg?: string;
  token?: string;
  user_role?: 'Administrador' | 'Gestor' | 'Colaborador'[];
}
