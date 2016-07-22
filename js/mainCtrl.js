angular.module('assessment').controller('mainCtrl', function($scope, mainSrv, $stateParams) {

  var id = $stateParams.id;


  $scope.getData = function() {
    mainSrv.getData().then(function(results){
      $scope.data = results.data;
    });
  };

$scope.getData();


  $scope.getDetails = function() {
    for (var i = 0; i < $scope.data.length; i++) {
      if (id === $scope.data[i].id) {
        return $scope.data[i];
      }
    }
  }

  $scope.cssToggle = false;

});
