function appendToFiseTable(id, client, oras, imei, modifica, table_id = "lista-fise") {
    $.get('api/selectSwap/' + id)
        .done(function (response) {
            swap1 = response.swap;
            let row = "<tr>\n" +
                "                                                <th scope=\"row\">" + id + "</th>\n" +
                "                                                <td>" + client + "</td>\n" +
                "                                                <td>" + oras + "</td>\n" +
                "                                                <td>" + imei + "</td>\n" +
                "                                                <td>" + modifica + "</td>\n" +
                "                                                <td>" + swap1 + "</td>\n" +
                "                                            </tr>";
            $("#" + table_id).append(row);
        });
}

$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results)
        return results[1];
    return 0;
};

$(document).ready(function () {

    console.warn($.urlParam('imei'));
    //var proxy = 'https://cors-anywhere.herokuapp.com/';
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

    var getBrowserInfo = {
        "service": "getBrowserInfo",
        "clientId": "",
        "appId": "2001",
        "object": "SALDOC",
        "list": "Lista service IqFix WebService",
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
                                        console.info(response);
                                        response = response.rows;

                                        for (row in response) {
                                            var imei = response[row][4];

                                            var data = response[row][2];
                                            var client = response[row][3];
                                            var id = response[row][0];

                                            id = id.split(";");
                                            id = id[1];

                                            var modificaUrl = "<a href = 'create-fisa?id_fisa=" + id + "'> Modifica </a>";
                                            appendToFiseTable(id, client, data, imei, modificaUrl);
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

                                            var actionUrl = "<a href = 'create-fisa?create_from_imei=1&code=" + id + "&imei=" + imei + "&model_telefon=" + problema + "'> Creeaza fisa service </a>";
                                            appendToFiseTable(id, client, contact, imei, actionUrl);
                                        }
                                    });
                            }
                    });
                });
        });
})
;
