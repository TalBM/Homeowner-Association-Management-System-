app.controller("tenantsCtrl", function ($scope, $log, $http) {
    
    function Tenant(familyName, heName, sheName ,floor, dira, isVaad, phone, email) {
        this.familyName = familyName;
        this.heName = heName;
        this.sheName = sheName;
        this.floor = floor;
        this.dira = dira;
        this.isVaad = isVaad;
        this.phone = phone;
        this.email = email;
        this.show = true;
    }


    //----------- adding .json file to the array-------------
    
$scope.tenantsArray = [];
    $http.get("app/tenants/tenants_list.json").then(function (result) {

        for(var i=0; i< result.data.length; i++){
            var element=result.data[i];
            element = new Tenant(element.familyName, element.heName, element.sheName ,element.floor, element.dira, element.isVaad, element.phone, element.email);
            $scope.tenantsArray.push(element);
            }
        
    })

    $scope.deleteTenant =function(tenant){
        tenant.show = false;
        // var pos=$scope.tenantsArray.indexOf(tenant);
        // if (pos>-1){
        //     $scope.tenantsArray.splice(pos, 1)
        // }

    }

    $scope.updateTenant=function(tenant){

    }


});

