var app = angular.module("mainPage", []);
app.controller("mainPageController", function($scope) {
    var response = null;

    $.ajax({
        type : 'GET',
        url : 'http://api.bpm-repo/models.php',
        success : function(data) {
            response = data;
        },
        async : false
    });

    $scope.models = [
        {
            'processId' : '1',
            'processName' : 'Supply',
            'modelType' : 'BPMN',
            'modelFile' : 'supply.bpmn',
            'modelId' : '1'
        }
    ];
});
