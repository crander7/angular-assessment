angular.module('assessment').directive('product', function() {
    return {
      templateUrl: '../views/product-tmpl.html',
      restrict: 'A',
      scope: {
        merch: '=',
      }
      // link:function(scope, element, attrs) {
      //
      // }
    };
});
