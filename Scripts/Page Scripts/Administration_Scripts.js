$(document).ready(function () {

    $("#UserGrid").bootgrid({
        formatters: {
            "Edit": function (column, row) {
                return "<a href=\"" + window.location.pathname.substr(0, window.location.pathname.lastIndexOf("/")) + '/EditUser?UserId=' + row.UserId + "\">" + 'Edit' + "</a>";
            }
        }
    });

    $("#PracticeGrid").bootgrid({
        formatters: {
            "Change": function (column, row) {
                return "<a href=\"" + window.location.pathname.substr(0, window.location.pathname.lastIndexOf("/")) + '/EditPractice?PracticeId=' + row.PracticeId + "\">" + 'Edit' + "</a>";
            }
        }
    });

});