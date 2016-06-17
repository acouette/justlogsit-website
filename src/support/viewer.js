angular.module('justlogsit')
    .controller('ViewerCtrl', ['$routeParams', '$scope', function ($routeParams, $scope) {
        console.log($routeParams.file);
        $scope.file = '/assets/videos/' + $routeParams.file;
    }]);