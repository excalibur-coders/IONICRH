import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

// function perfil_funcionarioPDF(usuario_perfil: IUser | undefined) {
function perfil_funcionarioPDF(usuario_perfil) {
  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  const reportTitle = [
    {
      text: 'User',
      fontSize: 15,
      bold: true,
      margin: ['15, 20, 0, 45'], //left, top, right, bottom
    },
  ];

  const contentEstilazado = [
    {
      alignment: 'center',
      text: 'Ficha de Cadastro de Funcionários',
      style: 'header',
      fontSize: 23,
      bold: true,
      margin: [0, 10],
    },
    {
      margin: [0, 0, 0, 10],
      layout: {
        fillColor: function (rowIndex, node, columnIndex) {
          return rowIndex % 2 === 0 ? '#ebebeb' : '#f5f5f5';
        },
      },
      table: {
        widths: ['100%'],
        heights: [20, 10],
        body: [
          [
            {
              text: `Nome: ${usuario_perfil?.user_nome}`,
              fontSize: 9,
              bold: true,
            },
          ],
          [
            {
              text: `Cargo: ${usuario_perfil?.cargo_id}`,
              fontSize: 9,
              bold: true,
            },
            {
              text: `Head: ${usuario_perfil?.cargo_head}`,
              fontSize: 9,
              bold: true,
            },
            {
              text: `Nível: ${usuario_perfil?.cargo_nivel}`,
              fontSize: 9,
              bold: true,
            },
            {
              text: `Departamento: ${usuario_perfil?.dep_name}`,
              fontSize: 9,
              bold: true,
            },
          ],
        ],
      },
    },
    {
      style: 'tableExample',
      layout: {
        fillColor: function (rowIndex, node, columnIndex) {
          return rowIndex === 0 ? '#c2dec2' : null;
        },
      },
      table: {
        widths: ['30%', '10%', '25%', '35%'],
        heights: [10, 10, 10, 10, 30, 10, 25],
        headerRows: 1,
        body: [
          [
            {
              text: `Email: ${usuario_perfil?.user_email}`,
              colSpan: 3,
              bold: true,
              fontSize: 9,
            },
            {
              text: `Nascimento: ${usuario_perfil?.user_nascimento}`,
              fontSize: 9,
              bold: true,
            },
            {
              text: `RG: ${usuario_perfil?.user_rg}`,
              fontSize: 9,
              bold: true,
            },
            {
              text: `CPF: ${usuario_perfil?.user_cpf}`,
              fontSize: 9,
              bold: true,
            },
            {
              text: `Estado Civil: ${usuario_perfil?.user_estado_civil}`,
              fontSize: 9,
              bold: true,
            },
            {
              text: `Telefone: ${usuario_perfil?.tell_numero}`,
              fontSize: 9,
              bold: true,
            },
            {
              text: `Idioma: ${usuario_perfil?.idioma_falados}`,
              fontSize: 9,
              bold: true,
            },
          ],
          [
            {
              text: `Endereço: ${usuario_perfil?.endereco_rua}`,
              colSpan: 3,
              bold: true,
              fontSize: 9,
            },
            {
              text: `Cidade: ${usuario_perfil?.endereco_cidade}`,
              fontSize: 9,
              bold: true,
            },
            {
              text: `Estado: ${usuario_perfil?.endereco_estado}`,
              colSpan: 3,
              fontSize: 9,
              bold: true,
            },
            {
              text: `CEP: ${usuario_perfil?.endereco_cep}`,
              colSpan: 3,
              fontSize: 9,
              bold: true,
            },
            {
              text: `Numero: ${usuario_perfil?.endereco_numero}`,
              colSpan: 3,
              fontSize: 9,
              bold: true,
            },
            {
              text: `Complemento: ${usuario_perfil?.endereco_compl}`,
              colSpan: 3,
              fontSize: 9,
              bold: true,
            },
          ],
          [
            {
              text: [
                `Matricula: ${usuario_perfil?.contrato_matricula}`,
                {
                  text: 'Habitual',
                  bold: false,
                },
              ],
              fontSize: 9,
              bold: true,
            },
            {
              text: [
                `Turno: ${usuario_perfil?.contrato_turno}`,
                {
                  text: 'Leve',
                  bold: false,
                },
              ],
              colSpan: 3,
              fontSize: 9,
              bold: true,
            },
            {
              text: [
                `Base: ${usuario_perfil?.contrato_base}`,
                {
                  text: 'Habitual',
                  bold: false,
                },
              ],
              fontSize: 9,
              bold: true,
            },
            {
              text: [
                `Head: ${usuario_perfil?.cargo_head}`,
                {
                  text: 'Leve',
                  bold: false,
                },
              ],
              colSpan: 3,
              fontSize: 9,
              bold: true,
            },
            {
              text: [
                `Dominio: ${usuario_perfil?.contrato_dominio}`,
                {
                  text: 'Habitual',
                  bold: false,
                },
              ],
              fontSize: 9,
              bold: true,
            },
            {
              text: [
                `Nível: ${usuario_perfil?.argo_nivel}`,
                {
                  text: 'Leve',
                  bold: false,
                },
              ],
              colSpan: 3,
              fontSize: 9,
              bold: true,
            },
            {
              text: [
                `Tipo de Contrato: ${usuario_perfil?.contrato_tipo}`,
                {
                  text: 'Habitual',
                  bold: false,
                },
              ],
              fontSize: 9,
              bold: true,
            },
            {
              text: [
                `Data de Admissao: ${usuario_perfil?.contrato_data_admissao}`,
                {
                  text: 'Leve',
                  bold: false,
                },
              ],
              colSpan: 3,
              fontSize: 9,
              bold: true,
            },
            {
              text: [
                `Empresa Contratante: ${usuario_perfil?.contratante_nome}`,
                {
                  text: 'Habitual',
                  bold: false,
                },
              ],
              fontSize: 9,
              bold: true,
            },
            {
              text: [
                `Tempo de Formalização: ${usuario_perfil?.contrato_tempo_formalizacao}`,
                {
                  text: 'Leve',
                  bold: false,
                },
              ],
              colSpan: 3,
              fontSize: 9,
              bold: true,
            },
            {
              text: [
                `Tempo de Casa: ${usuario_perfil?.contrato_tempo_de_casa}`,
                {
                  text: 'Habitual',
                  bold: false,
                },
              ],
              fontSize: 9,
              bold: true,
            },
            {
              text: [
                `Faixa Salarial: ${usuario_perfil?.contrato_faixa_salarial}`,
                {
                  text: 'Leve',
                  bold: false,
                },
              ],
              colSpan: 3,
              fontSize: 9,
              bold: true,
            },
            {
              text: [
                `Termo de PJ: ${usuario_perfil?.contrato_termos}`,
                {
                  text: 'Habitual',
                  bold: false,
                },
              ],
              fontSize: 9,
              bold: true,
            },
            {
              text: [
                `Data de Desligamento: ${usuario_perfil?.contrato_data_desligamento}`,
                {
                  text: 'Leve',
                  bold: false,
                },
              ],
              colSpan: 3,
              fontSize: 9,
              bold: true,
            },
            {
              text: [
                `Distrato: ${usuario_perfil?.contrato_distrato}`,
                {
                  text: 'Habitual',
                  bold: false,
                },
              ],
              fontSize: 9,
              bold: true,
            },
          ],
          [
            {
              text: `Plano de Saúde: ${usuario_perfil?.contrato_plano_saude}`,
              colSpan: 2,
              fontSize: 9,
              bold: true,
            },
            {},
            {
              text: `Auxílio Creche: ${usuario_perfil?.contrato_auxilio_creche}`,
              colSpan: 2,
              fontSize: 9,
              bold: true,
            },
            {
              text: `Vale Transpote: ${usuario_perfil?.contrato_vale_transporte}`,
              border: [true, true, false, false],
              colSpan: 2,
              fontSize: 9,
              bold: true,
            },
            {
              text: `Vale Alimentação: ${usuario_perfil?.contrato_vale_alimentacao}`,
              border: [true, true, false, false],
              colSpan: 2,
              fontSize: 9,
              bold: true,
            },
            {
              text: `Vale Refeição: ${usuario_perfil?.contrato_vale_refeicao}`,
              border: [true, true, false, false],
              colSpan: 2,
              fontSize: 9,
              bold: true,
            },
          ],
        ],
      },
    },
  ];

  const docDefinitions = {
    // pagesSize: 'A4',
    // pageMargins: [15, 50, 15, 40],

    // header: [reportTitle],
    content: contentEstilazado,
    // footer: [rodape]
  };

  pdfMake.createPdf(docDefinitions).download();
}

export default perfil_funcionarioPDF;
