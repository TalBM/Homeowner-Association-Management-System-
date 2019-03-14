app.controller("tenantsCtrl", function ($scope, $log, $http) {

    function Tenant(familyName, heName, sheName, floor, dira, isVaad, phone, email) {
        this.familyName = familyName;
        this.heName = heName;
        this.sheName = sheName;
        this.floor = floor;
        this.dira = dira;
        this.isVaad = isVaad;
        this.phone = phone;
        this.email = email;
        this.show = true;
        this.update = false;
    }


    //----------- adding .json file to the array-------------

    $scope.tenantsArray = [];
    $http.get("app/tenants/tenants_list.json").then(function (result) {

        for (var i = 0; i < result.data.length; i++) {
            var element = result.data[i];
            element = new Tenant(
                element.familyName,
                element.heName,
                element.sheName,
                element.floor,
                element.dira,
                element.isVaad,
                element.phone,
                element.email
            );
            $scope.tenantsArray.push(element);
        }
    })


    $scope.deleteTenant = function (tenant) {
        tenant.show = false;
        // var pos=$scope.tenantsArray.indexOf(tenant);
        // if (pos>-1){
        //     $scope.tenantsArray.splice(pos, 1)
        // }

    }

    $scope.updateTenant = function (tenant) {
        tenant.update = !tenant.update;
        $scope.updateData = {};
    }


    $scope.updateData = {};//  כי המשתנים בפונקציה לא אותחלו
    $scope.updateTenantSave = function (tenant) {
        if (($scope.updateData.editedFamily === "") || ($scope.updateData.editedHe === "") || ($scope.updateData.editedShe === "")) {
            return tenant;
        }else {
    tenant.familyName = $scope.updateData.editedFamily;
    tenant.heName = $scope.updateData.editedHe;
    tenant.sheName = $scope.updateData.editedShe;
    tenant.isVaad = $scope.updateData.editedVaad;
    tenant.phone = $scope.updateData.editedPhone;
    tenant.email = $scope.updateData.editedEmail;
    tenant.update = !tenant.update;
}

    }

});

