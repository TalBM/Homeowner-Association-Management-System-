app.controller("navbarCtrl", function($scope, $location) {


    $scope.login = function() {
         $location.path("/login");
    }

    $scope.signup = function() {
        $location.path("/signup");
   }  
})