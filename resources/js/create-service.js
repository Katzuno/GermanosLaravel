$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results)
        return results[1];
    return 0;
};

$(document).ready(function () {
        //var proxy = "https://cors-anywhere.herokuapp.com/";
        var proxy = "api/proxy?url=";
        var softoneUrl = proxy + "https://cosmossales17.oncloud.gr/s1services";
        var username = "WSgermanos";
        var password = "FKlkf0o3F3;lk;dfkl3#4lkwe;dW";

        var clientId = "";
        let loginData = {
            "service": "login",
            "username": username,
            "password": password,
            "appId": "2001"
        };

        var authData = {
            "service": "authenticate",
            "clientID": "",
            "company": "5",
            "branch": "102",
            "module": "0",
            "refid": "1001"
        };

        var getData = {
            "service": "getData",
            "clientID": clientId,
            "appId": "2001",
            "OBJECT": "SALDOC",
            "FORM": "Service IqFix WebService",
            "KEY": 0
        };

        var reqId = "";

        var selectorClient = {
            "service": "getSelectorData",
            "clientID": clientId,
            "appId": "2001",
            "EDITOR": "CUSTOMER|CUSTOMER",
            "VALUE": ""
        };

        var selectorAgent = {
            "service": "getSelectorData",
            "clientID": clientId,
            "appId": "2001",
            "EDITOR": "1|PRSN|PRSN|BRANCH=102 AND COMPANY=5 AND CCCISTECHNICIAN=0|",
            "VALUE": ""
        };

        var selectorCanal = {
            "service": "getSelectorData",
            "clientID": clientId,
            "appId": "2001",
            "EDITOR": "1|CCCFILTRE|CCCFILTRE|SODTYPE=1|",
            "VALUE": ""
        };

        var selectorStare = {
            "service": "getSelectorData",
            "clientID": clientId,
            "appId": "2001",
            "EDITOR": "1|CCCFILTRE|CCCFILTRE|SODTYPE=2|",
            "VALUE": ""
        };

        const filialaGermanos = "victoriei";

        $.post(softoneUrl, JSON.stringify(loginData))
            .done(function (response) {
                authData.clientID = response.clientID;
                $.post(softoneUrl, JSON.stringify(authData))
                    .done(function (response) {
                        selectorClient.clientID = response.clientID;
                        $.post(softoneUrl, JSON.stringify(selectorClient))
                            .done(function (response) {
                                response = response.data;
                                let htmlClientsStr = "";
                                for (row in response) {
                                    clientName = response[row][2];
                                    htmlOption = "<option value = '" + response[row][0] + "'> " + clientName + "</option>";
                                    htmlClientsStr = htmlClientsStr + htmlOption;
                                }
                                $("#client").html(htmlClientsStr);
                            });
                    });
            });

        $.post(softoneUrl, JSON.stringify(loginData))
            .done(function (response) {
                authData.clientID = response.clientID;
                $.post(softoneUrl, JSON.stringify(authData))
                    .done(function (response) {
                        selectorAgent.clientID = response.clientID;
                        $.post(softoneUrl, JSON.stringify(selectorAgent))
                            .done(function (response) {
                                response = response.data;
                                let htmlAgentsStr = "";
                                for (row in response) {
                                    agentName = response[row][2];
                                    htmlOption = "<option value = '" + response[row][0] + "'> " + agentName + "</option>";
                                    htmlAgentsStr = htmlAgentsStr + htmlOption;
                                }
                                $("#agent").html(htmlAgentsStr);
                            });
                    });
            });

        $.post(softoneUrl, JSON.stringify(loginData))
            .done(function (response) {
                authData.clientID = response.clientID;
                $.post(softoneUrl, JSON.stringify(authData))
                    .done(function (response) {
                        selectorCanal.clientID = response.clientID;
                        $.post(softoneUrl, JSON.stringify(selectorCanal))
                            .done(function (response) {
                                response = response.data;
                                let htmlCanalsStr = "";
                                for (row in response) {
                                    canalName = response[row][2];
                                    htmlOption = "<option value = '" + response[row][0] + "'> " + canalName + "</option>";
                                    htmlCanalsStr = htmlCanalsStr + htmlOption;
                                }
                                $("#canal").html(htmlCanalsStr);
                            });
                    });
            });

        $.post(softoneUrl, JSON.stringify(loginData))
            .done(function (response) {
                authData.clientID = response.clientID;
                $.post(softoneUrl, JSON.stringify(authData))
                    .done(function (response) {
                        selectorStare.clientID = response.clientID;
                        $.post(softoneUrl, JSON.stringify(selectorStare))
                            .done(function (response) {
                                response = response.data;
                                let htmlStareStr = "";
                                for (row in response) {
                                    stareName = response[row][2];
                                    htmlOption = "<option value = '" + response[row][0] + "'> " + stareName + "</option>";
                                    htmlStareStr = htmlStareStr + htmlOption;
                                }
                                $("#stare2").html(htmlStareStr);
                            });
                    });
            });

        if ($.urlParam('id_fisa') !== 0) {
            $.post(softoneUrl, JSON.stringify(loginData))
                .done(function (response) {
                    authData.clientID = response.clientID;
                    $.post(softoneUrl, JSON.stringify(authData))
                        .done(function (response) {
                            clientId = response.clientID;
                            getData.clientID = clientId;
                            getData.KEY = $.urlParam('id_fisa');
                            console.warn(getData);
                            $.post(softoneUrl, JSON.stringify(getData))
                                .done(function (response) {
                                    console.info(response);
                                    response = response.data;
                                    let saldoc = response.SALDOC[0];
                                    let itelines = response.ITELINES[0];

                                    console.info(response);

                                    var imei = itelines.CCCIMEI;
                                    var modelTelefon = itelines.CCCEXP;

                                    let dataAchizitie = new Date(itelines.DATE01);

                                    dataAchizitie = dataAchizitie.getFullYear() + "-" + (dataAchizitie.getMonth() + 1) + "-" + dataAchizitie.getDate();


                                    var agent = saldoc.SALESMAN;
                                    var nume = saldoc.VARCHAR01;
                                    var delegat = saldoc.CCCDELEGAT;
                                    var cnp = saldoc.VARCHAR02L;
                                    var email = saldoc.CCCEMAIL;
                                    var telefon = saldoc.CCCTELEFON;
                                    var access_pass = saldoc.CCCSERIEBI;
                                    var sursa = saldoc.CCCSURSA;
                                    var canal = saldoc.CCCCANAL;
                                    var stare = saldoc.CCCNUM03;
                                    var observatii = saldoc.COMMENTS;
                                    var defect = saldoc.COMMENTS1;

                                    $("#agent").val(agent);
                                    $("#nume_client").val(nume);
                                    $("#delegat").val(delegat);
                                    $("#cnp").val(cnp);
                                    $("#email").val(email);
                                    $("#phone").val(telefon);
                                    $("#parola").val(access_pass);
                                    $("#sursa").val(sursa);
                                    $("#canal").val(canal);
                                    $("#stare2").val(stare);
                                    $("#observatii").val(observatii);
                                    $("#defect").val(defect);

                                    $("#checkbox_imei").val(1);
                                    $("#text_imei").val(imei);
                                    $("#model_telefon").val(modelTelefon);
                                    $("#data_achizitie").val(dataAchizitie);
                                });
                        });
                });
        }

        if ($.urlParam('create_from_imei') !== 0) {
            var imei = $.urlParam('imei');
            var modelTelefon = $.urlParam('model_telefon');
            var id = $.urlParam('code');
            var undf = 'UNDEFINED';

            //$("#agent").val(undf);
            //$("#nume_client").val(client);
            //$("#delegat").val(fisaCorecta[8]);
            //$("#cnp").val(undf);
            //$("#email").val(undf + '@undefined.s1');
            //$("#phone").val(contact);
            //$("#parola").val(undf);
            //$("#sursa").val(fisaCorecta[4]);
            //$("#canal").val(fisaCorecta[12]);
            //$("#stare2").val(undf);
            //$("#observatii").val(fisaCorecta[16]);
            //$("#defect").val(problema);


            $("#checkbox_imei").val(1);
            $("#text_imei").val(imei);
            modelTelefon = modelTelefon.replace(/%20/g, " ");
            $("#model_telefon").val(modelTelefon);
            $("#data_achizitie").val(undf);
        }

        $("#createButton").click(function (event) {
            event.preventDefault();
            let agent = $("#agent").val();
            let nume = $("#nume_client").val();
            let delegat = $("#delegat").val();
            let cnp = $("#cnp").val();
            let email = $("#email").val();
            let telefon = $("#phone").val();
            let access_pass = $("#parola").val();
            let sursa = $("#sursa").val();
            let canal = $("#canal").val();
            let stare = $("#stare2").val();
            let observatii = $("#observatii").val();
            let defect = $("#defect").val();

            let imeiBool;
            if ($("#checkbox_imei:checked").length > 0) {
                imeiBool = 1;
            } else {
                imeiBool = 0;
            }

            console.warn(imeiBool);
            let imeiField = $("#text_imei").val();
            let modelTelefon = $("#model_telefon").val();
            let dataAchizitie = new Date($("#data_achizitie").val());

            dataAchizitie = dataAchizitie.getFullYear() + "/" + (dataAchizitie.getMonth() + 1) + "/" + dataAchizitie.getDate();

            console.info(dataAchizitie);

            var postFIsaService =
                {
                    "service": "setData",
                    "clientID": clientId,
                    "appId": "2001",
                    "OBJECT": "SALDOC",
                    "FORM": "Service IqFix",
                    "KEY": "",
                    "data": {
                        "SALDOC": [
                            {
                                "SERIES": 8511,
                                "TRDR": 96991,
                                "SALESMAN": agent,
                                "VARCHAR01": nume,
                                "CCCDELEGAT": delegat,
                                "VARCHAR02": cnp,
                                "CCCEMAIL": email,
                                "CCCTELEFON": telefon,
                                "CCCSERIEBI": access_pass,
                                "CCCSURSA": sursa,
                                "CCCCANAL": canal,
                                "CCCNUM03": stare,
                                "COMMENTS": observatii,
                                "COMMENTS1": defect
                            }
                        ],
                        "ITELINES": [
                            {
                                "MTRL": 83503,
                                "CCCBOOL01": imeiBool,
                                "CCCIMEI": imeiField,
                                "DATE01": dataAchizitie,
                                "CCCEXP": modelTelefon
                            }
                        ]
                    }
                };


            $.post(softoneUrl, JSON.stringify(loginData))
                .done(function (response) {
                    authData.clientID = response.clientID;
                    $.post(softoneUrl, JSON.stringify(authData))
                        .done(function (response) {
                            postFIsaService.clientID = response.clientID;
                            $.post(softoneUrl, JSON.stringify(postFIsaService))
                                .done(function (response) {
                                    console.warn(postFIsaService);
                                    console.info(response);
                                    console.error(response);
                                    console.error(response.success);
                                    if (response.success === false) {
                                        alert(response.error);
                                    } else {
                                        console.info(response);
                                        alert("succesfully created");
                                    }
                                });
                        });
                });
        });

        $("#downloadPDFBtn").click(function (event) {
            event.preventDefault();
            // $("#completare_fisa").toggle();
            let nume = $("#nume_client").val();
            let email = $("#email").val();
            let telefon = $("#phone").val();
            let access_pass = $("#parola").val();
            let sursa = $("#sursa option:selected").text();
            let canal = $("#canal option:selected").text();
            let stare = $("#stare2 option:selected").text();
            let defect = $("#defect").val();
            let modelTelefon = $("#model_telefon").val();
            let imei = $("#text_imei").val();

            let nrCard = $("#nr_card").val();
            let companie = $("#client").val();
            let adresa = $("#adresa").val();
            let oras = $("#oras").val();
            populateHtmlTemplate(nrCard, nume, companie, adresa, oras, 'undf', telefon, email, ' undf', modelTelefon, imei, "8511 - 96991", access_pass, defect, stare, sursa + " " + canal);

            generatePDF();
    });

    function generatePDF() {
        var doc = new jsPDF();
        var specialElementHandlers = {
            '#editor': function (element, renderer) {
                return true;
            }
        };
        doc.fromHTML($('#tmp_pdf_template').html(), 15, 15, {
            'width': 170,
            'elementHandlers': specialElementHandlers
        },
            function(bla){
            doc.save("Fisa-service-" + $("#nr_card").val() + ".pdf");
            });
    }

        function populateHtmlTemplate(nrFisa, fullName, company, address, oras,
                                      judet, nrTel, email, producator, model,
                                      imei, serieNr, accessPass, defect, stare, how) {
            $("#tmp_nr_fisa").html(nrFisa);
            $("#tmp_full_name").html(fullName);
            $("#tmp_company").html(company);
            $("#tmp_address").html(address);
            $("#tmp_oras").html(oras);
            $("#tmp_judet").html(judet);
            $("#tmp_nr_tel").html(nrTel);
            $("#tmp_email").html(email);
            $("#tmp_producator").html(producator);
            $("#tmp_model").html(model);
            $("#tmp_imei").html(imei);
            $("#tmp_serie_numar").html(serieNr);
            $("#tmp_access_pass").html(accessPass);
            $("#tmp_defect").html(defect);
            $("#tmp_stare").html(stare);
            $("#tmp_how").html(how);

            generatePDF();

        }
    }
);

