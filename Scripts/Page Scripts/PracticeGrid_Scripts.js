﻿$(document).ready(function () {

    $("#PracticeGrid").bootgrid({
        formatters: {
            "Edit": function (column, row) {
                return "<a href=\"" + window.location.pathname.substr(0, window.location.pathname.lastIndexOf("/")) + '/EditPractice?PracticeId=' + row.PracticeId + "\">" + 'Edit' + "</a>";
            }
        }
    });

});