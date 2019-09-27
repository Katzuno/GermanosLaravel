$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results)
        return results[1];
    return 0;
}

$(document).ready(function () {

    var proxy = 'https://cors-anywhere.herokuapp.com/';
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

    var getBrowserInfo = {
        "service": "getBrowserInfo",
        "clientId": "",
        "appId": "2001",
        "object": "SALDOC",
        "list": "Lista service IqFix",
        "filters": ""
    };

    var reqId = "";

    var getBrowserListe = {
        "service": "getBrowserData",
        "clientID": "",
        "appId": "2001",
        "reqID": "",
        "START": 0,
        "LIMIT": 10000
    };


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
                        getBrowserInfo.clientId = clientId;
                        $.post(softoneUrl, JSON.stringify(getBrowserInfo))
                            .done(function (response) {
                                getBrowserListe.clientID = clientId;
                                reqId = response.reqID;
                                getBrowserListe.reqID = reqId;
                                $.post(softoneUrl, JSON.stringify(getBrowserListe))
                                    .done(function (response) {
                                        response = response.rows;
                                        for (i in response) {
                                            if (response[i][8].toLowerCase().includes(filialaGermanos) && response[i][5] == $.urlParam('id_fisa')) {
                                                fisaCorecta = response[i];
                                            }
                                        }
                                        console.info(fisaCorecta);
                                        var imei = fisaCorecta[7];

                                        var problema = fisaCorecta[11];
                                        var contact = fisaCorecta[9];
                                        var client = fisaCorecta[6];
                                        var id = fisaCorecta[0];
                                        var undf = 'UNDEFINED';

                                        $("#agent").val(undf);
                                        $("#nume_client").val(client);
                                        $("#delegat").val(fisaCorecta[8]);
                                        $("#cnp").val(undf);
                                        $("#email").val(undf + '@undefined.s1');
                                        $("#phone").val(contact);
                                        $("#parola").val(undf);
                                        $("#sursa").val(fisaCorecta[4]);
                                        $("#canal").val(fisaCorecta[12]);
                                        $("#stare2").val(undf);
                                        $("#observatii").val(fisaCorecta[16]);
                                        $("#defect").val(problema);

                                        $("#checkbox_imei").val(1);
                                        $("#text_imei").val(imei);
                                        $("#model_telefon").val(undf);
                                        $("#data_achizitie").val(undf);

                                    });

                            });
                    });
            });
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

        let imeiBool = $("#checkbox_imei").val();
        let imeiField = $("#text_imei").val();
        let modelTelefon = $("#model_telefon").val();
        let dataAchizitie = $("#data_achizitie").val();

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
                            "DATE01": modelTelefon,
                            "CCCEXP": dataAchizitie
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
                                if (response.success == "false") {
                                    alert(response.error);
                                } else {
                                    alert("succesfully created");
                                }
                            });
                    });
            });
    });
});
