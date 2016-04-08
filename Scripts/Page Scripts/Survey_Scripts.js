$(document).ready(function () {

    $("#SurveyGrid").bootgrid({
        sorting: false,
        formatters: {
            "GenerateProviderSurvey": function (column, row) {
                return "<a href=\"" + window.location.pathname.substr(0, window.location.pathname.lastIndexOf("/")) + '/GenerateProviderSurvey?SurveyCodeId=' + row.SurveyCodeId + "\">" + 'Generate' + "</a>";
            },
            "GeneratePatientSurvey": function (column, row) {
                return "<a href=\"" + window.location.pathname.substr(0, window.location.pathname.lastIndexOf("/")) + '/GeneratePatientSurvey?SurveyCodeId=' + row.SurveyCodeId + "\">" + 'Generate' + "</a>";
            }
        },
        templates: {
            search: ""
        }
    });

    $("#SelectedPractice").change(function () {
        $.getJSON(window.location.pathname.substr(0, window.location.pathname.lastIndexOf("/")) + "/LoadProviders?PracticeId=" + $("#SelectedPractice > option:selected").attr("value"), function (data) {
            var items = "<option></option>";
            $.each(data, function (i, section) {
                items += "<option value=" + section.Value + ">" + section.Text + "</option>";
            });
            $("#SelectedProvider").html(items);
        });
    });

    window.history.forward(-1);

});