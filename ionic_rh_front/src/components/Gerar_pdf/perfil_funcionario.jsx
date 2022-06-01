import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

function perfil_funcionarioPDF(usuario-perfil) {
  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  const reportTitle = [
    {
      text: 'User',
      fontSize: 15,
      bold: true,
      margin: ['15, 20, 0, 45'] //left, top, right, bottom
    }
  ];

  const dados = clientes.map((usuario) => {
    return [
      {text: usuario.id, fontSize: 9, margin: [0, 2, 0, 2]},
      {text: usuario.nome, fontSize: 9, margin: [0, 2, 0, 2]},
      {text: usuario.email, fontSize: 9, margin: [0, 2, 0, 2]},
      {text: usuario.telefone, fontSize: 9, margin: [0, 2, 0, 2]},
    ]
  });

  const details = [
    {
      table: {
        headerRows: 1,
        widths: ['*', '*', '*', '*'], //definição das colunas, o * ajusta automatico
        body: [
          [
            {text: 'Matricula', style: 'tableHeader', fontSize: 10},
            {text: 'Nome', style: 'tableHeader', fontSize: 10},
            {text: 'E-mail', style: 'tableHeader', fontSize: 10},
            {text: 'Telefone', style: 'tableHeader', fontSize: 10},
          ],
          ...dados

        ]
      },
      layout: 'lightHorizontalLines'
    }
  ]

  function rodape(currentPage, pageCount){
    return [
      {
        text: currentPage + ' / ' + pageCount,
        alignment: 'right',
        fontSize: 9,
        margin: ['0, 10, 20, 0'] //left, top, right, bottom
      }
    ]
  }

  const docDefinition = {
    pagesSize: 'A4',
    pageMargins: [15, 50, 15, 40],

    header: [reportTitle],
    content: [details],
    footer: [rodape]
  }

  pdfMake.createPdf(docDefinitions).download();
}

export default perfil_funcionarioPDF;
