import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

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
      margin: ['15, 20, 0, 45'] //left, top, right, bottom
    }
  ];

  const contentEstilazado = [
    {
      alignment: 'center',
      text: 'PPRA',
      style: 'header',
      fontSize: 23,
      bold: true,
      margin: [0, 10],
    },
    {
      margin: [0, 0, 0, 10],
      layout: {
        fillColor: function (rowIndex, node, columnIndex) {
          return (rowIndex % 2 === 0) ? '#ebebeb' : '#f5f5f5';
        }
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
            }
          ],
          [
            {
              text: 'FUNÇÃO: DIRETOR DE ENSINO',
              fontSize: 9,
              bold: true
            }
          ],
        ],
      }
    },
    {
      style: 'tableExample',
      layout: {
        fillColor: function (rowIndex, node, columnIndex) {
          return (rowIndex === 0) ? '#c2dec2' : null;
        }
      },
      table: {
        widths: ['30%', '10%', '25%', '35%'],
        heights: [10, 10, 10, 10, 30, 10, 25],
        headerRows: 1,
        body: [
          [
            {
              text: 'AGENTE: Não Identificados',
              colSpan: 3,
              bold: true,
              fontSize: 9
            },
            {
            },
            {
            },
            {
              text: 'GRUPO: Grupo 1 - Riscos Físicos',
              fontSize: 9,
              bold: true
            }
          ],
          [
            {
              text: 'Limite de Tolerância:',
              fontSize: 9,
              bold: true
            },
            {
              text: 'Meio de Propagação:',
              colSpan: 3,
              fontSize: 9,
              bold: true
            },
            {
            },
            {
            }
          ],
          [
            {
              text: [
                'Frequência: ',
                {
                  text: 'Habitual',
                  bold: false
                }
              ],
              fontSize: 9,
              bold: true
            },
            {
              text: [
                'Classificação do Efeito: ',
                {
                  text: 'Leve',
                  bold: false
                }
              ],
              colSpan: 3,
              fontSize: 9,
              bold: true
            },
            {
            },
            {
            }
          ],
          [
            {
              text: 'Tempo de Exposição:',
              colSpan: 2,
              fontSize: 9,
              bold: true
            },
            {
            },
            {
              text: 'Medição:',
              colSpan: 2,
              fontSize: 9,
              bold: true
            },
            {
            }
          ],
          [
            {
              text: 'Fonte Geradora:',
              border: [true, true, false, false],
              colSpan: 2,
              fontSize: 9,
              bold: true
            },
            {
            },
            {
              text: 'Téc. Utilizada:',
              border: [false, true, true, false],
              colSpan: 2,
              fontSize: 9,
              bold: true
            },
            {
            }
          ],
          [
            {
              text: 'Conclusão:',
              border: [true, false, true, true],
              colSpan: 4,
              fontSize: 9,
              bold: true
            },
            {
            },
            {
            },
            {
            }
          ],
          [
            {
              text: 'EPIs/EPCs:',
              border: [true, true, false, true],
              colSpan: 3,
              fontSize: 9,
              bold: true
            },
            {
            },
            {
            },
            {
              text: 'CAs:',
              border: [false, true, true, true],
              fontSize: 9,
              bold: true
            }
          ],
        ]
      }
    }
  ]

  const dados = [
    // usuario_perfil.user_cpf,
    // usuario_perfil.user_rg
    // {text: usuario_perfil.user_cpf, fontSize: 9, margin: [0, 2, 0, 2]},
    // {text: usuario_perfil.user_rg, fontSize: 9, margin: [0, 2, 0, 2]},
  ]
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
  }
  console.log('opa')
  pdfMake.createPdf(docDefinitions).download();
}

export default perfil_funcionarioPDF;
