import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

// interface IUser {
//   user_cpf?: string;
//   user_rg: string;
//   user_nascimento?: string;
//   user_genero?: string;
//   user_estado_civil?: string;
//   user_nome?: string;
// }

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
              text: `Cargo: ${usuario_perfil?.contrato?.[0]?.cargo.cargo_area}`,
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
              text: `Head: ${usuario_perfil?.contrato?.[0]?.cargo.cargo_head}`,
              fontSize: 9,
              bold: true,
            },
            {
              text: `Nível: ${usuario_perfil?.contrato?.[0]?.cargo.cargo_nivel}`,
              fontSize: 9,
              bold: true,
            },
            {
              text: `Departamento: ${usuario_perfil?.contrato?.[0]?.cargo.departamento?.dep_name}`,
              fontSize: 9,
              bold: true,
            },
            {},
          ],
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
            {},
            {},
          ],
          [
            {
              text: [
                {
                  text: `RG: ${
                    usuario_perfil?.user_rg && usuario_perfil?.user_rg
                  }`,
                  fontSize: 9,
                  bold: true,
                },
              ],
              fontSize: 9,
              bold: true,
            },
            {
              text: [
                `CPF: ${usuario_perfil?.user_cpf}`,
                {
                  text: 'Leve',
                  bold: false,
                },
              ],
              colSpan: 3,
              fontSize: 9,
              bold: true,
            },
            {},
            {},
          ],
          [
            {
              text: `Estado Civil: ${usuario_perfil?.user_estado_civil}`,
              colSpan: 2,
              fontSize: 9,
              bold: true,
            },
            {},
            {
              text: `Telefone: ${usuario_perfil?.telefone?.[0]?.tell_numero}`,
              colSpan: 2,
              fontSize: 9,
              bold: true,
            },
            {},
          ],
          [
            {
              text: `Endereço: ${usuario_perfil?.endereco?.[0]?.endereco_rua}`,
              border: [true, true, false, false],
              colSpan: 2,
              fontSize: 9,
              bold: true,
            },
            {},
            {
              text: `Cidade: ${usuario_perfil?.endereco?.[0]?.endereco_cidade}`,
              border: [false, true, true, false],
              colSpan: 2,
              fontSize: 9,
              bold: true,
            },
            {},
          ],
          [
            {
              text: `Estado: ${
                usuario_perfil?.endereco?.[0]?.endereco_estado &&
                usuario_perfil?.endereco?.[0]?.endereco_estado
              }`,
              border: [true, false, true, true],
              colSpan: 4,
              fontSize: 9,
              bold: true,
            },
            {},
            {},
            {},
          ],
          [
            {
              text: `Data de Admissao: ${usuario_perfil?.contrato?.[0]?.contrato_data_adicao}`,
              border: [true, true, false, true],
              colSpan: 3,
              fontSize: 9,
              bold: true,
            },
            {},
            {},
            {
              text: `Empresa Contratante: ${usuario_perfil?.contrato?.[0]?.emp_contratante.contratante_nome}`,
              border: [false, true, true, true],
              fontSize: 9,
              bold: true,
            },
          ],
        ],
      },
    },
  ];

  const dados = [
    // usuario_perfil.user_cpf,
    // usuario_perfil.user_rg
    // {text: usuario_perfil.user_cpf, fontSize: 9, margin: [0, 2, 0, 2]},
    // {text: usuario_perfil.user_rg, fontSize: 9, margin: [0, 2, 0, 2]},
  ];
  // usuario_perfil.map((usuario) => {
  //   return [
  //     {text: usuario.id, fontSize: 9, margin: [0, 2, 0, 2]},
  //     {text: usuario.nome, fontSize: 9, margin: [0, 2, 0, 2]},
  //     {text: usuario.email, fontSize: 9, margin: [0, 2, 0, 2]},
  //     {text: usuario.telefone, fontSize: 9, margin: [0, 2, 0, 2]},
  //   ]
  // });

  // const details  = [
  //   {
  //     table: {
  //       headerRows: 1,
  //       widths: ['*', '*', '*', '*'], //definição das colunas, o * ajusta automatico
  //       body: [
  //         [
  //           {text: 'RG', style: 'tableHeader', fontSize: 10},
  //           {text: 'CPF', style: 'tableHeader', fontSize: 10},
  //         ],
  //         ...dados

  //       ]
  //     },
  //     layout: 'lightHorizontalLines'
  //   }
  // ]

  // function rodape(currentPage, pageCount){
  //   return [
  //     {
  //       text: currentPage + ' / ' + pageCount,
  //       alignment: 'right',
  //       fontSize: 9,
  //       margin: ['0, 10, 20, 0'] //left, top, right, bottom
  //     }
  //   ]
  // }

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
