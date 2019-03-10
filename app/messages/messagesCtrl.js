app.controller("messagesCtrl", function ($scope, $log, $http) {


    function Message(msg, postedBy, dira, isVaad, created) {
        this.msg = msg;
        this.postedBy = postedBy || "מני מנחמוב";
        this.dira = dira || "1";
        this.isVaad = isVaad || false;
        this.created = created || new Date();

    }

    //----------- adding .json file to the array-------------
    $scope.msgArray = [];

    $http.get("app/messages/msg.json").then(function (result) {
        //success: add json array into 'actorsArray' array
        $scope.msgArray = result.data;
    }, function (error) {
        //error: print to console an error message with the status (e.g. 404 or 504...)
        console.error(error.status);
    });//------end



    $scope.filterMsg = function (msg) {
        if (!$scope.msgfilterBy) {

            return true;
            // } else if ( movie.title.toLowerCase().includes($scope.moviefilterBy.toLowerCase()) )
        } else if (
            msg.msg.includes($scope.msgfilterBy) ||
            msg.postedBy.includes($scope.msgfilterBy) ||
            msg.dira.includes($scope.msgfilterBy)) {

            return true;
        }
        else {
            if ($scope.nothingToShow > 0) {
                $scope.nothingToShow++;
            }
            else {
                $scope.nothingToShow = 1;
            }
            //$scope.nothingToShow = ($scope.nothingToShow > 0) ? $scope.nothingToShow + 1 : 1;
            return false;

        }

    };

    $scope.addNewMsg = function() {
        var newMsg= new Message($scope.newMsg)
        $scope.msgArray.push(newMsg)
    }

});