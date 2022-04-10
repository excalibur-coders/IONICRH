export interface IUser {
  user_id: number;
  user_nome?: string;
  user_nacionalidade?: string;
  user_naturalidade?: string;
  user_nascimento?: string;
  user_genero?: string;
  user_cpf?: string;
  user_estado_civil?: string;
  telefone?: number;
  escolaridade?: number;
  idioma?: number;
  documentos?: number;
  user_role:  ["Administrador" | "Colaborador" | "Consultor" | "Gestor"]
}
