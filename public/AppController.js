var socket = io.connect();

var AppController = function ($scope) {
    $scope.mappings = [];

    socket.on('list', function (documents) {
        $scope.$apply(function () {
            $scope.mappings = documents;
        });
    });
}

angular.module('app', []);
angular.module('app').controller('AppController', AppController)