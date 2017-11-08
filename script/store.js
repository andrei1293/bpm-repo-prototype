$(document).ready(function() {
    $('#existingProcessSection').hide();
    $('#newProcessSection').hide();
    $('#storeFormError').hide();
    $('#storeFormSubmit').hide();

    $('#newProcess').click(function() {
        $('#existingProcessSection').hide();
        $('#newProcessSection').show();
    });

    $('#existingProcess').click(function() {
        $('#existingProcessSection').show();
        $('#newProcessSection').hide();
    });

    $('#storeModelButton').click(function() {
        var isStoreFormValid = true;

        if (!$("#newProcess").prop("checked") && !$("#existingProcess").prop("checked")) {
            isStoreFormValid = false;
        }

        if ($("#newProcess").prop("checked")) {
            if (!$('#processName').val()) isStoreFormValid = false;
            if (!$('#processSource').val()) isStoreFormValid = false;
        }

        if (!$('#modelFile').val()) isStoreFormValid = false;

        if (isStoreFormValid) {
            $('#storeFormError').hide();
            $('#storeModelForm').hide();
            $('#storeFormSubmit').show();
        } else {
            $('#storeFormError').show();
        }
    });
});
