angular.module('assessment').controller('mainCtrl', function($scope, mainSrv, $stateParams) {

  var id = $stateParams.id;


  $scope.getData = function() {
    mainSrv.getData().then(function(results){
      $scope.data = results.data;
      return results.data;
    });
  };

  $scope.data = $scope.getData();


  $scope.getDetails = function() {
    var data = $scope.data;
    for (var i = 0; i < data.length; i++) {
      if (id === data[i].id) {
        return data[i];
      }
    }
  }


});
