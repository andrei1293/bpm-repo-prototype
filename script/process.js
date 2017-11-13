$(document).ready(function() {
    $('#updateParentProcessError').hide();
    $('#updateFormSubmit').hide();

    $('#updateParentProcessButton').click(function() {
        var isValid = true;

        if ($('#parentProcessList').val() === 'none') isValid = false;

        if (isValid) {
            $('#updateParentProcessError').hide();
            $('#processInfo').hide();
            $('#storedModelsList').hide();
            $('#updateFormSubmit').show();
        } else {
            $('#updateParentProcessError').show();
        }
    });
});
