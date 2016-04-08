$(document).ready(function () {

    window.history.forward(-1);

    $('#Receptionist').hide();
    $('#MedicalAssistant').hide();
    $('#Nurse').hide();

    $('#VaccComm_Receptionist').change(function () {
        if (this.checked) {
            $('#Receptionist').show();
        }
        else {
            $('#Receptionist').hide();
        }
    });

    $('#VaccComm_MedicalAssistant').change(function () {
        if (this.checked) {
            $('#MedicalAssistant').show();
        }
        else {
            $('#MedicalAssistant').hide();
        }
    });

    $('#VaccComm_Nurse').change(function () {
        if (this.checked) {
            $('#Nurse').show();
        }
        else {
            $('#Nurse').hide();
        }
    });

});