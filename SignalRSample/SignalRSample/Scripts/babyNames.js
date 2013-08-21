/// <reference path="jquery-2.0.3.js" />
/// <reference path="jquery.signalR-1.0.0.js" />

$(document).ready(function () {
    var hub = $.connection.babyNamesHub,
        babyNamesTable = $('#BabyNamesTable'),
        babyName = $('#BabyName');

    hub.client.babyNamed = function (name) {
        babyNamesTable.append('<tr><td>' + name + '</td></tr>');
        babyName.val('');
    };

    $.connection.hub.start().done(function () {
        $('#AddButton').click(function () {
            var name = babyName.val();
            hub.server.addBabyName(name);
        });
    });
});