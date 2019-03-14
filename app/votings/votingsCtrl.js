app.controller("votingsCtrl", function ($scope, $log, $http) {
    
    $scope.test="---הצבעות OK---";


 
  // Chart
  $scope.options = {
    legend: {
      display: true
    }
  }
  
  var testArr = [100, 40];
  $scope.updateChartData = function() {
    console.log($scope.data);
    var varOne = 100;
    var varTwo = 40;
    
//     for (var i = 0; i < $scope.cars.length; i++) {
//       if ($scope.cars[i].year >= 2012) {
//         ++newCars;
//       } else {
//         ++oldCars;
//       }
//     }
    
    return testArr;
  }
  
  $scope.labels = ["varOne", "varTwo"];
  $scope.data = [33, 12];
  

});