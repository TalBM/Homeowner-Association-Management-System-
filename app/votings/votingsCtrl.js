app.controller("votingsCtrl", function ($scope, $log, $http) {

    // $scope.test = "---הצבעות OK---";

    // -----  constructor: vote
    function Vote(createdBy, title, details, dueDate, voteOptions, votes) {
        this.createdBy = createdBy || "אדמיניסטרטור קונסטרקטור";
        this.title = title;
        this.details = details;
        this.dueDate = dueDate;
        this.voteOptions = voteOptions;
        this.votes = votes;
        this.data = [] ;
        this.labels = voteOptions;
        this.percents = [];
        this.stat = [];
        this.fullstat = {};
        this.show = true;
        this.closed = false;

    }


    //----------- adding .json file to the voteArray:
    $scope.voteArray = [];

    $http.get("app/votings/votingList.json").then(function (result) {

        for (var i = 0; i < result.data.length; i++) {
            var element = result.data[i];
            element = new Vote(
                element.createdBy,
                element.title,
                element.details,
                element.dueDate,
                element.voteOptions,
                element.votes,

            );
            // element.created = new Date(element.created);  
            $scope.voteArray.push(element);
            // $scope.vote.labels.push(element.voteOptions);


            /// 1) put zeros in $scope.data (as the number of labels)
            for (var z = 0; z < element.voteOptions.length; z++) {
                element.data.push(0)
            }
            // 2) Loops over votes and increase $scope.data[votes[j].vote]
            for (var j = 0; j < element.votes.length; j++) {
                var voteIndex = element.votes[j].vote;
                element.data[voteIndex]++
            }
            // 3) calculating the percentage of each data
            for (var f = 0; f < element.data.length; f++) {
                var newPercent = Math.round(element.data[f] / element.votes.length * 100);
                element.percents.push(newPercent);
                element.stat.push(element.labels[f] + "  -  " + element.data[f] + " מתוך " + element.votes.length + " (" + element.percents[f] + "%" + ")");


            }


        }
    });

    // -----------------------

    // Chart
    // $scope.options = {  legend: {display: true,position: 'right',},    }

    // var testArr = [100, 40];
    // $scope.updateChartData = function () {
    //     console.log($scope.data);
    //     var varOne = 100;
    //     var varTwo = 40;
    //     return testArr;
    // }
    // $scope.voteLabels = [];
    // $scope.labels = []; // ["varOne", "varTwo"];//
    // $scope.data = [] //[33, 12, 22];

    // $scope.addVoteLabels=function(label){
    //     for (i=0; i<=$scope.voteArray.length; i++){
    //         $scope.labels.push($scope.voteArray[i]) 
    //     }
    // }

    // -----------------------

    
    // ----creating new vote:
    $scope.runningVoteArray = [];

    $scope.addNewVote = function () {
        $scope.voteInputArray.push($scope.voteInput);

        var tempVote = new Vote(
            "משתמש אנונימי",
            $scope.voteTitle,
            $scope.voteDetails,
            $scope.voteDuedate,
            $scope.voteInputArray
        )
        
        $scope.runningVoteArray.push(tempVote);
        // $scope.voteArray.push(new Vote(tempVote));

        console.log($scope.runningVoteArray);
        console.log($scope.voteInputArray);
        debugger;
    }




    //---------- vote input -----------
    $scope.voteInputArray = ["", ""];
    // $scope.voteInputArray.push("", "");

    $scope.addNewInputVote = function () {
        $scope.voteInputArray.push($scope.voteInput);
    }

    $scope.deleteNewInputVote = function (index) {
        $scope.voteInputArray.splice(index, 1);
    }
    //---- toggle new vote form:
    $scope.voteFormShow = false;
    $scope.voteFormToggle = function () {
        $scope.voteFormShow = !$scope.voteFormShow;
    }


}); //controller