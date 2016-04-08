$(document).ready(function () {

    $("#ProviderGrid").bootgrid({
        formatters: {
            "Edit": function (column, row) {
                return "<a href=\"" + window.location.pathname.substr(0, window.location.pathname.lastIndexOf("/")) + '/EditProvider?ProviderId=' + row.ProviderId + "\">" + 'Edit' + "</a>";
            }
        }
    });

});