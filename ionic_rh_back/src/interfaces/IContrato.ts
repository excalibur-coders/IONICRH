export interface IContrato {
    contrato_id: number,
    contrato_matricula?: string,
    contrato_base?: string,
    contrato_tempo_de_casa?: string,
    contrato_termos?: string,
    contrato_turno?: string,
    contrato_tempo_formalizacao?: string,
    contrato_dominio?: string,
    contrato_data_desligamento?: string,
    contrato_nivel?: string,
    contrato_distrato?: string,
    contrato_tipo?: ["Pessoa Juridica" | "CLT" | "Estagio" | "Temporario"]
    contrato_faixa_salarial?: number,
    contrato_plano_saude?: number,
    contrato_vale_transporte?: number,
    contrato_vale_refeicao?: number,
    contrato_vale_alimentacao?: number,
    contrato_adimissao?: string,
    contrato_auxilio_creche?: number,
    userUserId?: number
    empContratanteContratanteId?: number,
    cargoCargoId?: number,
    empPjPjId?: number
}