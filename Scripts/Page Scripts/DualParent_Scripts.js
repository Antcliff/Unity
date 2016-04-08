$(document).ready(function () {

    $('.NoRecommendation').hide();


    // Initial Load -------------------------------------------------

    tdap_Checked = $('#TdapRecommended').is(":checked")
    menACWY_Checked = $('#MenACWYRecommended').is(":checked");
    menB_Checked = $('#MenBRecommended').is(":checked");
    hpv_Checked = $('#HPVRecommended').is(":checked");

    tdap_Received = $('#TdapReceived').is(":checked")
    menACWY_Received = $('#MenACWYReceived').is(":checked");
    menB_Received = $('#MenBReceived').is(":checked");
    hpv_Received = $('#HPVReceived').is(":checked");

    CheckShots(tdap_Checked, menACWY_Checked, menB_Checked, hpv_Checked);

    CheckNotReceivedShots(tdap_Checked, menACWY_Checked, menB_Checked, hpv_Checked, tdap_Received, menACWY_Received, menB_Received, hpv_Received);

    if ($('input:radio[name=AskProviderQuestions]:checked').val() == 'Y') {
        $('.QuestionEffectiveness').show();
    }
    else {
        $('.QuestionEffectiveness').hide();
    }

    // --------------------------------------------------------------

    // Recommended Change -------------------------------------------
    $('#TdapRecommended').change(function () {
        tdap_Checked = $('#TdapRecommended').is(":checked")
        menACWY_Checked = $('#MenACWYRecommended').is(":checked");
        menB_Checked = $('#MenBRecommended').is(":checked");
        hpv_Checked = $('#HPVRecommended').is(":checked");

        tdap_Received = $('#TdapReceived').is(":checked")
        menACWY_Received = $('#MenACWYReceived').is(":checked");
        menB_Received = $('#MenBReceived').is(":checked");
        hpv_Received = $('#HPVReceived').is(":checked");

        CheckShots(tdap_Checked, menACWY_Checked, menB_Checked, hpv_Checked);

        CheckNotReceivedShots(tdap_Checked, menACWY_Checked, menB_Checked, hpv_Checked, tdap_Received, menACWY_Received, menB_Received, hpv_Received);
    });

    $('#MenACWYRecommended').change(function () {
        tdap_Checked = $('#TdapRecommended').is(":checked")
        menACWY_Checked = $('#MenACWYRecommended').is(":checked");
        menB_Checked = $('#MenBRecommended').is(":checked");
        hpv_Checked = $('#HPVRecommended').is(":checked");

        tdap_Received = $('#TdapReceived').is(":checked")
        menACWY_Received = $('#MenACWYReceived').is(":checked");
        menB_Received = $('#MenBReceived').is(":checked");
        hpv_Received = $('#HPVReceived').is(":checked");

        CheckShots(tdap_Checked, menACWY_Checked, menB_Checked, hpv_Checked);

        CheckNotReceivedShots(tdap_Checked, menACWY_Checked, menB_Checked, hpv_Checked, tdap_Received, menACWY_Received, menB_Received, hpv_Received);
    });

    $('#MenBRecommended').change(function () {
        tdap_Checked = $('#TdapRecommended').is(":checked")
        menACWY_Checked = $('#MenACWYRecommended').is(":checked");
        menB_Checked = $('#MenBRecommended').is(":checked");
        hpv_Checked = $('#HPVRecommended').is(":checked");

        tdap_Received = $('#TdapReceived').is(":checked")
        menACWY_Received = $('#MenACWYReceived').is(":checked");
        menB_Received = $('#MenBReceived').is(":checked");
        hpv_Received = $('#HPVReceived').is(":checked");

        CheckShots(tdap_Checked, menACWY_Checked, menB_Checked, hpv_Checked);

        CheckNotReceivedShots(tdap_Checked, menACWY_Checked, menB_Checked, hpv_Checked, tdap_Received, menACWY_Received, menB_Received, hpv_Received);
    });

    $('#HPVRecommended').change(function () {
        tdap_Checked = $('#TdapRecommended').is(":checked")
        menACWY_Checked = $('#MenACWYRecommended').is(":checked");
        menB_Checked = $('#MenBRecommended').is(":checked");
        hpv_Checked = $('#HPVRecommended').is(":checked");

        tdap_Received = $('#TdapReceived').is(":checked")
        menACWY_Received = $('#MenACWYReceived').is(":checked");
        menB_Received = $('#MenBReceived').is(":checked");
        hpv_Received = $('#HPVReceived').is(":checked");

        CheckShots(tdap_Checked, menACWY_Checked, menB_Checked, hpv_Checked);

        CheckNotReceivedShots(tdap_Checked, menACWY_Checked, menB_Checked, hpv_Checked, tdap_Received, menACWY_Received, menB_Received, hpv_Received);
    });
    // --------------------------------------------------------------

    // Received Change ----------------------------------------------
    $('#TdapReceived').change(function () {
        tdap_Checked = $('#TdapRecommended').is(":checked")
        menACWY_Checked = $('#MenACWYRecommended').is(":checked");
        menB_Checked = $('#MenBRecommended').is(":checked");
        hpv_Checked = $('#HPVRecommended').is(":checked");

        tdap_Received = $('#TdapReceived').is(":checked")
        menACWY_Received = $('#MenACWYReceived').is(":checked");
        menB_Received = $('#MenBReceived').is(":checked");
        hpv_Received = $('#HPVReceived').is(":checked");

        CheckNotReceivedShots(tdap_Checked, menACWY_Checked, menB_Checked, hpv_Checked, tdap_Received, menACWY_Received, menB_Received, hpv_Received);
    });

    $('#MenACWYReceived').change(function () {
        tdap_Checked = $('#TdapRecommended').is(":checked")
        menACWY_Checked = $('#MenACWYRecommended').is(":checked");
        menB_Checked = $('#MenBRecommended').is(":checked");
        hpv_Checked = $('#HPVRecommended').is(":checked");

        tdap_Received = $('#TdapReceived').is(":checked")
        menACWY_Received = $('#MenACWYReceived').is(":checked");
        menB_Received = $('#MenBReceived').is(":checked");
        hpv_Received = $('#HPVReceived').is(":checked");

        CheckNotReceivedShots(tdap_Checked, menACWY_Checked, menB_Checked, hpv_Checked, tdap_Received, menACWY_Received, menB_Received, hpv_Received);
    });

    $('#MenBReceived').change(function () {
        tdap_Checked = $('#TdapRecommended').is(":checked")
        menACWY_Checked = $('#MenACWYRecommended').is(":checked");
        menB_Checked = $('#MenBRecommended').is(":checked");
        hpv_Checked = $('#HPVRecommended').is(":checked");

        tdap_Received = $('#TdapReceived').is(":checked")
        menACWY_Received = $('#MenACWYReceived').is(":checked");
        menB_Received = $('#MenBReceived').is(":checked");
        hpv_Received = $('#HPVReceived').is(":checked");

        CheckNotReceivedShots(tdap_Checked, menACWY_Checked, menB_Checked, hpv_Checked, tdap_Received, menACWY_Received, menB_Received, hpv_Received);
    });

    $('#HPVReceived').change(function () {
        tdap_Checked = $('#TdapRecommended').is(":checked")
        menACWY_Checked = $('#MenACWYRecommended').is(":checked");
        menB_Checked = $('#MenBRecommended').is(":checked");
        hpv_Checked = $('#HPVRecommended').is(":checked");

        tdap_Received = $('#TdapReceived').is(":checked")
        menACWY_Received = $('#MenACWYReceived').is(":checked");
        menB_Received = $('#MenBReceived').is(":checked");
        hpv_Received = $('#HPVReceived').is(":checked");

        CheckNotReceivedShots(tdap_Checked, menACWY_Checked, menB_Checked, hpv_Checked, tdap_Received, menACWY_Received, menB_Received, hpv_Received);
    });
    // --------------------------------------------------------------

    // Ask Provider Question Radio Change ---------------------------
    $('input[type=radio][name=AskProviderQuestions]').change(function () {
        if (this.value == 'Y') {
            $('.QuestionEffectiveness').show();
        }
        else {
            $('.QuestionEffectiveness').hide();
        }
    });
    // --------------------------------------------------------------

    // Disable Browser Back -----------------------------------------
    window.history.forward(-1);
    // --------------------------------------------------------------

});

function CheckShots(tdap, menACWY, menB, hpv) {
    var count = 0;

    if (tdap) {
        count++;
    }

    if (menACWY) {
        count++;
    }

    if (menB) {
        count++;
    }

    if (hpv) {
        count++;
    }

    if (count == 1) {
        $('.NoSelection').show();
        $('.NoRecommendation').hide();
        $('.ShotsReceived').show();

        if (tdap) {
            $('.TdapReceived').show();
        }
        else {
            $('.TdapReceived').hide();
        }

        if (menACWY) {
            $('.MenACWYReceived').show();
        }
        else {
            $('.MenACWYReceived').hide();
        }

        if (menB) {
            $('.MenBReceived').show();
        }
        else {
            $('.MenBReceived').hide();
        }

        if (hpv) {
            $('.HPVReceived').show();
        }
        else {
            $('.HPVReceived').hide();
        }
    }
    else if (count == 2) {
        $('.NoSelection').show();
        $('.NoRecommendation').show();
        $('.ShotsReceived').show();

        if (tdap) {
            $('.TdapReceived').show();
            $('.TdapOrder').show();
        }
        else {
            $('.TdapReceived').hide();
            $('.TdapOrder').hide();
        }

        if (menACWY) {
            $('.MenACWYReceived').show();
            $('.MenACWYOrder').show();
        }
        else {
            $('.MenACWYReceived').hide();
            $('.MenACWYOrder').hide();
        }

        if (menB) {
            $('.MenBReceived').show();
            $('.MenBOrder').show();
        }
        else {
            $('.MenBReceived').hide();
            $('.MenBOrder').hide();
        }

        if (hpv) {
            $('.HPVReceived').show();
            $('.HPVOrder').show();
        }
        else {
            $('.HPVReceived').hide();
            $('.HPVOrder').hide();
        }

        $('.ThirdOrder').hide();
        $('.ForthOrder').hide();
    }
    else if (count == 3) {
        $('.NoSelection').show();
        $('.NoRecommendation').show();
        $('.ShotsReceived').show();

        if (tdap) {
            $('.TdapReceived').show();
            $('.TdapOrder').show();
        }
        else {
            $('.TdapReceived').hide();
            $('.TdapOrder').hide();
        }

        if (menACWY) {
            $('.MenACWYReceived').show();
            $('.MenACWYOrder').show();
        }
        else {
            $('.MenACWYReceived').hide();
            $('.MenACWYOrder').hide();
        }

        if (menB) {
            $('.MenBReceived').show();
            $('.MenBOrder').show();
        }
        else {
            $('.MenBReceived').hide();
            $('.MenBOrder').hide();
        }

        if (hpv) {
            $('.HPVReceived').show();
            $('.HPVOrder').show();
        }
        else {
            $('.HPVReceived').hide();
            $('.HPVOrder').hide();
        }

        $('.ThirdOrder').show();
        $('.ForthOrder').hide();
    }
    else if (count == 4) {
        $('.NoSelection').show();
        $('.NoRecommendation').show();
        $('.ShotsReceived').show();

        if (tdap) {
            $('.TdapReceived').show();
            $('.TdapOrder').show();
        }
        else {
            $('.TdapReceived').hide();
            $('.TdapOrder').hide();
        }

        if (menACWY) {
            $('.MenACWYReceived').show();
            $('.MenACWYOrder').show();
        }
        else {
            $('.MenACWYReceived').hide();
            $('.MenACWYOrder').hide();
        }

        if (menB) {
            $('.MenBReceived').show();
            $('.MenBOrder').show();
        }
        else {
            $('.MenBReceived').hide();
            $('.MenBOrder').hide();
        }

        if (hpv) {
            $('.HPVReceived').show();
            $('.HPVOrder').show();
        }
        else {
            $('.HPVReceived').hide();
            $('.HPVOrder').hide();
        }

        $('.ThirdOrder').show();
        $('.ForthOrder').show();
    }
    else {
        $('.NoSelection').hide();
        $('.NoRecommendation').hide();

        $('.TdapOrder').hide();
        $('.MenACWYOrder').hide();
        $('.MenBOrder').hide();
        $('.HPVOrder').hide();

    }
}

function CheckNotReceivedShots(tdap_Checked, menACWY_Checked, menB_Checked, hpv_Checked, tdap_Received, menACWY_Received, menB_Received, hpv_Received) {

    var count = 0;

    if (tdap_Checked) {
        if (!tdap_Received) {
            count++;
        }
    }

    if (menACWY_Checked) {
        if (!menACWY_Received) {
            count++;
        }
    }

    if (menB_Checked) {
        if (!menB_Received) {
            count++;
        }
    }

    if (hpv_Checked) {
        if (!hpv_Received) {
            count++;
        }
    }

    if (count >= 1) {
        $('.ShotsNotReceived').show();
        $('.AllChecked').show();

        if (tdap_Checked && !tdap_Received) {
            $('.TdapNotReceived').show();
        }
        else {
            $('.TdapNotReceived').hide();
        }

        if (menACWY_Checked && !menACWY_Received) {
            $('.MenACWYNotReceived').show();
        }
        else {
            $('.MenACWYNotReceived').hide();
        }

        if (menB_Checked && !menB_Received) {
            $('.MenBNotReceived').show();
        }
        else {
            $('.MenBNotReceived').hide();
        }

        if (hpv_Checked && !hpv_Received) {
            $('.HPVNotReceived').show();
        }
        else {
            $('.HPVNotReceived').hide();
        }
    }
    else {
        $('.AllChecked').show();
        $('.ShotsNotReceived').hide();

        $('.TdapNotReceived').hide();
        $('.MenACWYNotReceived').hide();
        $('.MenBNotReceived').hide();
        $('.HPVNotReceived').hide();
    }

    if (tdap_Checked && menACWY_Checked && menB_Checked && hpv_Checked) {
        if (tdap_Received && menACWY_Received && menB_Received && hpv_Received) {
            $('.AllChecked').hide();

            $('.TdapNotReceived').hide();
            $('.MenACWYNotReceived').hide();
            $('.MenBNotReceived').hide();
            $('.HPVNotReceived').hide();
        }
    }
}

