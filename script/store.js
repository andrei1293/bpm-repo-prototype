$(document).ready(function() {
    $('#existingProcessSection').hide();
    $('#newProcessSection').hide();
    $('#storeFormError').hide();
    $('#storeFormSubmit').hide();
    $('#afterStoring').hide();
    $('#grantUserError').hide();
    $('#grantRolesSection').hide();

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

        var processId = new Date().getTime();

        if ($("#newProcess").prop("checked")) {
            if (!$('#processName').val()) isStoreFormValid = false;
            if (!$('#processSource').val()) isStoreFormValid = false;
            if ($('#parentProcessList').val() == 'none') isStoreFormValid = false;

            $.get('https://api.bpm-repo/storeProcess.php',
                {
                    'processId' : processId,
                    'processName' : $('#processName').val(),
                    'parentProcess' : $('#parentProcessList').val(),
                    'processIndustry' : $('#processIndustry').val(),
                    'processSource' : $('#processSource').val(),
                    'processDescription' : $('#processDescription').val()
                }
            );
        }

        if (!$('#modelFile').val()) isStoreFormValid = false;

        /*if (!$("#openModel").prop("checked") && !$("#grantAccess").prop("checked")) {
            isStoreFormValid = false;
        }*/

        if (isStoreFormValid) {
            $('#storeFormError').hide();
            $('#storeModelForm').hide();
            $('#storeFormSubmit').show();
            $('#afterStoring').show();

            if ($("#newProcess").prop("checked")) {
                $.get('https://api.bpm-repo/storeModel.php',
                    {
                        'relatedProcess' : processId,
                        'modelType' : $('#modelType').val(),
                        'modelFile' : $('#modelFile').val(),
                        'modelReport' : $('#modelReport').val(),
                        'modelImage' : $('#modelImage').val()
                    }
                );
            } else {
                $.get('https://api.bpm-repo/storeModel.php',
                    {
                        'relatedProcess' : $('#existingProcessList').val(),
                        'modelType' : $('#modelType').val(),
                        'modelFile' : $('#modelFile').val(),
                        'modelReport' : $('#modelReport').val(),
                        'modelImage' : $('#modelImage').val()
                    }
                );
            }
        } else {
            $('#storeFormError').show();
        }
    });

    $('#openModel').click(function() {
        $('#grantRolesSection').hide();
    });

    $('#grantAccess').click(function() {
        $('#grantRolesSection').show();
    });

    /*$('#addUserReadModel').click(function() {
        var userName = $('#grantUserField').val();
        var isValid = true;
        if (!userName) isValid = false;

        if (grantedUsers.indexOf(userName + '-r') == -1) {
            if (isValid) {
                $.get('https://api.github.com/search/users?q=' + userName, function(data) {
                    if (data.total_count == 1) {
                        $('#grantUserError').hide();
                        grantedUsers.push(userName + '-r');
                        $('#grantUsersList').append('<a class="btn btn-default btn-xs" onclick="var index = grantedUsers.indexOf(\'' +
                            userName + '-r\'); grantedUsers.splice(index, 1); this.parentNode.removeChild(this);">' +
                            userName + ' &#9747</a> ');
                        $('#grantUserField').val('');
                    } else {
                        $('#grantUserError').show();
                    }
                });
            } else {
                $('#grantUserError').show();
            }
        } else {
            $('#grantUserError').hide();
        }
    });

    $('#addUserWriteModel').click(function() {
        var userName = $('#grantUserField').val();
        var isValid = true;
        if (!userName) isValid = false;

        if (grantedUsers.indexOf(userName + '-w') == -1) {
            if (isValid) {
                $.get('https://api.github.com/search/users?q=' + userName, function(data) {
                    if (data.total_count == 1) {
                        $('#grantUserError').hide();
                        grantedUsers.push(userName + '-w');
                        $('#grantUsersList').append('<a class="btn btn-primary btn-xs" onclick="var index = grantedUsers.indexOf(\'' +
                            userName + '-w\'); grantedUsers.splice(index, 1); this.parentNode.removeChild(this);">' +
                            userName + ' &#9747</a> ');
                        $('#grantUserField').val('');
                    } else {
                        $('#grantUserError').show();
                    }
                });
            } else {
                $('#grantUserError').show();
            }
        } else {
            $('#grantUserError').hide();
        }
    });*/
});

var app = angular.module("storePage", []);
app.controller("storePageController", function($scope) {
    var response = null;

    $.ajax({
        type : 'GET',
        url : 'https://api.bpm-repo/store.php',
        success : function(data) {
            response = data;
        },
        async : false
    });

    $scope.processes = [
        {
            'processId' : 'none',
            'processName' : '---'
        },
        {
            'processId' : '1',
            'processName' : 'Make'
        },
        {
            'processId' : '2',
            'processName' : 'Deliver'
        }
    ];
    $scope.processIndustry = [
        {
            'processIndustryId' : '1',
            'processIndustryName' : 'Supply chain'
        },
        {
            'processIndustryId' : '2',
            'processIndustryName' : 'Manufactory'
        }
    ];
    $scope.modelType = [
        {
            'modelTypeId' : '1',
            'modelTypeName' : 'BPMN'
        },
        {
            'modelTypeId' : '2',
            'modelTypeName' : 'IDEF0'
        }
    ];
});
