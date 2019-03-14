app.factory("tenantsService", function($log, $http, $q) {

    var tenantsArray = [];
    var wasEverLoaded = false;

// -----  constructor
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

    function getTenants() {
        var async = $q.defer();
        
        if (wasEverLoaded) {
          async.resolve(tenantsArray);
        } else {
          // Get all tenants from JSON - only for the first time
          $http.get("app/tenants/tenants_list.json").then(function (result) {
            // success
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
                tenantsArray.push(element);
            }
            wasEverLoaded = true;
            async.resolve(tenantsArray); // resolving the promise with the tenantsArray array      
          }, function(err) {
            // error
            console.error(err);
            async.reject(err);  // rejecting the promise
          });
        }
        
        return async.promise;
      }    
      
      

      
      return {
        getTenants: getTenants
      }


});//factory end