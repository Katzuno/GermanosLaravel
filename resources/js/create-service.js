$(document).ready(function () {
    var softoneUrl = "https://cosmossales17.oncloud.gr/s1services";
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
                            for (row in response)
                            {
                                clientName = response[row][2];
                                htmlOption = "<option value = '" +response[row][0] + "'> " + clientName + "</option>";
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
                            for (row in response)
                            {
                                agentName = response[row][2];
                                htmlOption = "<option value = '" +response[row][0] + "'> " + agentName + "</option>";
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
                            for (row in response)
                            {
                                canalName = response[row][2];
                                htmlOption = "<option value = '" +response[row][0] + "'> " + canalName + "</option>";
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
                            for (row in response)
                            {
                                stareName = response[row][2];
                                htmlOption = "<option value = '" +response[row][0] + "'> " + stareName + "</option>";
                                htmlStareStr = htmlStareStr + htmlOption;
                            }
                            $("#stare2").html(htmlStareStr);
                        });
                });
        });

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
                            "DATE01": "",
                            "CCCEXP": "TELEFON TEST"
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
                                if (response.success == "false")
                                {
                                    alert(response.error);
                                }
                                else
                                {
                                    alert ("succesfully created");
                                }
                            });
                    });
            });
    });
});