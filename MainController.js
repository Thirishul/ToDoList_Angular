app.controller('MainController', ['$scope', function ($scope) {
    $scope.list = ['hello', 'hi']
    $scope.additem = function () {
        $scope.list.push($scope.add);
    }
}]);