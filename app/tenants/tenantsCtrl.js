app.controller("tenantsCtrl", function ($scope, $log, $http, tenantsService) {


    // Loading the tenants
    $scope.tenantsArray = [];
    tenantsService.getTenants().then(function (tenants) {
        $scope.tenantsArray = tenants;
    }, function (err) {
        $log.error(err);
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
        $scope.updateData.editedFamily = tenant.familyName;
        $scope.updateData.editedHe = tenant.heName;
        $scope.updateData.editedShe = tenant.sheName;
        $scope.updateData.editedVaad = tenant.isVaad;
        $scope.updateData.editedPhone = tenant.phone;
        $scope.updateData.editedEmail = tenant.email;
    }

    $scope.clearTenant = function (tenant) {
        $scope.updateData = {};

    }


    $scope.updateData = {};//  כי המשתנים בפונקציה לא אותחלו
    $scope.updateTenantSave = function (tenant) {
        if (($scope.updateData.editedFamily === "") || ($scope.updateData.editedHe === "") || ($scope.updateData.editedShe === "")) {
            return tenant;
        } else {
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

