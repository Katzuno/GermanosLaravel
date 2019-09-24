function appendToFiseTable(id, client, oras, imei, table_id = "lista-fise") {
    let row = "<tr>\n" +
        "                                                <th scope=\"row\">" + id + "</th>\n" +
        "                                                <td>" + client + "</td>\n" +
        "                                                <td>" + oras + "</td>\n" +
        "                                                <td>" + imei + "</td>\n" +
        "                                                <td>Modifica</td>\n" +
        "                                            </tr>";
    $("#" + table_id).append(row);
}

$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results)
        return results[1];
    return 0;
}

$(document).ready(function () {

    console.warn($.urlParam('imei'));
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

    var getImeiFilter = {
            "service": "SqlData",
            "clientID": "",
            "appId": "2001",
            "SqlName": "APPLY002",
            "param1": ""
        }
    ;
    var listaFiseFiliala = [];

    const filialaGermanos = "victoriei";

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
                            if ($.urlParam('imei') === 0)
                            {
                                $.post(softoneUrl, JSON.stringify(getBrowserListe))
                                    .done(function (response) {
                                        response = response.rows;
                                        for (i in response) {
                                            if (response[i][8].toLowerCase().includes(filialaGermanos)) {
                                                listaFiseFiliala.push(response[i]);
                                            }
                                        }
                                        console.info(listaFiseFiliala);
                                        for (fisa in listaFiseFiliala) {
                                            var imei = listaFiseFiliala[fisa][7];

                                            var problema = listaFiseFiliala[fisa][11];
                                            var contact = listaFiseFiliala[fisa][9];
                                            var client = listaFiseFiliala[fisa][6];
                                            var id = listaFiseFiliala[fisa][0];
                                            appendToFiseTable(id, client, contact, imei);
                                        }
                                    });
                            }
                            else
                            {
                                getImeiFilter.clientID = clientId;
                                getImeiFilter.param1 = $.urlParam('imei');
                                $.post(softoneUrl, JSON.stringify(getImeiFilter))
                                    .done(function (response) {
                                        responseArr = response.rows;
                                        console.info(response);
                                        var imei = $.urlParam('imei');
                                        for (i in responseArr) {
                                            response = responseArr[i];
                                            var problema = response.Telefon;
                                            var contact = response.Filiala;
                                            var client = response.Nume;
                                            var id = response.CODE;
                                            appendToFiseTable(id, client, contact, imei);
                                        }
                                    });
                            }
                    });
                });
        });
})
;