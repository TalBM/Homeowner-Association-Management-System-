app.controller("votingsCtrl", function ($scope, $log, $http) {

    $scope.test = "---הצבעות OK---";

    // -----  constructor
    function Vote(createdBy, title, details, DueDate, voteOptions, votes, whoVoted) {
        this.createdBy = createdBy || "האיש מוועד הבית";
        this.title = title;
        this.details = details;
        this.DueDate = DueDate;
        this.voteOptions = voteOptions;
        this.votes = votes;
        this.whoVoted = whoVoted;
        this.show = true;
        this.closed = false;
    }

    //----------- adding .json file to the array-------------
    $scope.voteArray = [];

    $http.get("app/votings/votingList.json").then(function (result) {

        for (var i = 0; i < result.data.length; i++) {
            var element = result.data[i];
            element = new Vote(
                element.createdBy,
                element.title,
                element.details,
                element.DueDate,
                element.voteOptions,
                element.votes,
                element.whoVoted
            );
            // element.created = new Date(element.created);  
            $scope.voteArray.push(element);
        }
    });

    $scope.addNewVote=function(element){
        $scope.voteArray.push(new Vote(element)
    );
    }



// Chart
        $scope.options = {
            legend: {
                display: true
            }
        }
        
        var testArr = [100, 40];
        $scope.updateChartData = function () {
            console.log($scope.data);
            var varOne = 100;
            var varTwo = 40;

            return testArr;
        }

        $scope.labels = ["varOne", "varTwo"];
        $scope.data = [33, 12];


    });
