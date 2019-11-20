
function generatePDF()
{
    var doc = new jsPDF();
    var specialElementHandlers = {
        '#editor': function (element, renderer) {
            return true;
        }
    };
    /*
    UPDATE gdpr_audit
       SET question = REPLACE(question,'@','<br/>'), details = REPLACE(details,'@','<br/>'),
       recommendNo = REPLACE(recommendNo,'@','<br/>'), recommendPartial = REPLACE(recommendPartial,'@','<br/>'), recommendYes = REPLACE(recommendYes,'@','<br/>')
     */

    doc.fromHTML($('#test-pdf').html(), 15, 15, {
        'width': 170,
        'elementHandlers': specialElementHandlers
    });
    doc.save('sample-file.pdf');
}


function generateHTML()
{
    let doc = "<html> ";
    // DOCUMENT TITLE
    let title = "<h1 class = 'center'>Rezultatele obtinute in urma auditului </h1>";

    doc = doc + title;
    for (var i in currentAnswers) {
        if (currentAnswers[i] == "No")
        {
            selectedColumn = 0;
        }
        else if (currentAnswers[i] == "Da")
        {
            selectedColumn = 2;
        }
        else
        {
            selectedColumn = 1;
        }
        $.ajax({
            url: "http://gdpr.ithit.ro:3000/api/audit/getQuestionRecommandation/" + i + "/" + selectedColumn,
            async: false
        })
            .done(function( response ) {
                let recommendation;
                let questionContent = "<p>";
                // console.info(response.suggestion);
                recommendation = response.suggestion;

                // console.warn(response);
                // console.warn(response.suggestion);
                //// console.error(recommendation);

                // INTREBARE
                question = "<b> " + i + ") " + response.question + "</b> <br/>";

                questionAnswer = "<b><i>Raspunsul dumneavoastra a fost: " + currentAnswers[i] + "</i></b><br/>";

                // RECOMANDARE
                questionRecommendation = "<i>Recomandarea noastra este: <br/>";


                questionRecommendation = questionRecommendation + recommendation + "</i><br/>";
                questionContent = questionContent + question + questionAnswer + questionRecommendation + "</P>";

                doc = doc + questionContent;
                // console.log(response);
            });

    }
    doc = doc + "</html>";

    $("#test-pdf").append(doc);

    generatePDF();
}