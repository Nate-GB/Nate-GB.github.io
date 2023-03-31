//window.jsPDF = window.jspdf.jsPDF;

// Convert HTML content to PDF
function Convert_HTML_To_PDF() {
    var pdf = new jsPDF('p','pt','a4');
    let pdfConf = {
        pagesplit: true, //Adding page breaks manually using pdf.addPage();
        background: '#fff', //White Background.
        };
        pdf.fromHTML($('.resume').get(0),20,20,{
        width:500
    })

    pdf.save("Nathan Gerard-Bowen Resume.pdf");
 }

