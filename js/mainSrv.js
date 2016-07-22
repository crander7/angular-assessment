angular.module('assessment').service('mainSrv', function($http) {

  this.getData = function() {
    return $http({
      method: 'GET',
      url: 'http://practiceapi.devmounta.in/products'
    }).then(function(response) {
      return response;
    });
  };

});//End Service
