$(document).ready(function() {
    $('#updateFormSubmit').hide();
    $('#afterUpdate').hide();
    $('#updateModelImageError').hide();
    $('#updateModelFileError').hide();
    $('#updateModelReportError').hide();

    $('#updateModelImageButton').click(function() {
        var isValid = true;

        if (!$('#modelImage').val()) isValid = false;

        if (isValid) {
            $('#updateModelImageError').hide();
            $('#modelInfoSection').hide();
            $('#storedModelsList').hide();
            $('#updateFormSubmit').show();
            $('#afterUpdate').show();
        } else {
            $('#updateModelImageError').show();
        }
    });

    $('#updateModelFileButton').click(function() {
        var isValid = true;

        if (!$('#modelFile').val()) isValid = false;

        if (isValid) {
            $('#updateModelFileError').hide();
            $('#modelInfoSection').hide();
            $('#storedModelsList').hide();
            $('#updateFormSubmit').show();
            $('#afterUpdate').show();
        } else {
            $('#updateModelFileError').show();
        }
    });

    $('#updateModelReportButton').click(function() {
        var isValid = true;

        if (!$('#modelReport').val()) isValid = false;

        if (isValid) {
            $('#updateModelReportError').hide();
            $('#modelInfoSection').hide();
            $('#storedModelsList').hide();
            $('#updateFormSubmit').show();
            $('#afterUpdate').show();
        } else {
            $('#updateModelReportError').show();
        }
    });
});
