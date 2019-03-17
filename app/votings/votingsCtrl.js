app.controller("votingsCtrl", function ($scope, $log, $http) {

    // $scope.test = "---הצבעות OK---";

    // -----  constructor
    function Vote(createdBy, title, details, DueDate, voteOptions, votes) {
        this.createdBy = createdBy || "האיש מוועד הבית";
        this.title = title;
        this.details = details;
        this.DueDate = DueDate;
        this.voteOptions = voteOptions;
        this.votes = votes;
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
            );
            // element.created = new Date(element.created);  
            $scope.voteArray.push(element);
           $scope.labels = element.voteOptions;


           /// 1) put zeros in $scope.data (as the number of labels)
           for (var z = 0; z < element.voteOptions.length; z++) {
            $scope.data.push(0)
           }
           // 2) Loops over votes and increase $scope.data[votes[j].vote]
           for (var j = 0; j < element.votes.length; j++) {
               var voteIndex=element.votes[j].vote;
            $scope.data[voteIndex]++
           }
           
        
        }

    });

// -----------------------

// Chart
        $scope.options = {
            legend: {
                display: true,
                position: 'right',
            },
            // text: $scope.voteArray[0].title,
            
        }
        
        // var testArr = [100, 40];
        // $scope.updateChartData = function () {
        //     console.log($scope.data);
        //     var varOne = 100;
        //     var varTwo = 40;
        //     return testArr;
        // }
        $scope.voteLabels=[];
        $scope.labels = [];// ["varOne", "varTwo"];//
        $scope.data = []//[33, 12, 22];

        // $scope.addVoteLabels=function(label){
        //     for (i=0; i<=$scope.voteArray.length; i++){
        //         $scope.labels.push($scope.voteArray[i]) 
        //     }
        // }

// -----------------------

    // creating new vote
    // $scope.addNewVote=function(element){
    //     $scope.voteArray.push(new Vote(element)
    // );
    // }

//---------- vote input -----------
$scope.voteInputArray=["",""];

$scope.addNewInputVote=function(){
    $scope.voteInputArray.push("");
}
$scope.deleteNewInputVote=function(index){
   $scope.voteInputArray.splice(index,1);
}



    }); //controller
