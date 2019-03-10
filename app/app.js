var app = angular.module("vaadApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "app/landingpage/landingpage.html"
    }).when("/login", {
        templateUrl: "app/login/login.html",
        controller: "loginCtrl"
    }).when("/signup", {
        templateUrl: "app/login/signup.html",
        controller: "signupCtrl"
    }).when("/overview", {
        templateUrl: "app/overview/overview.html",
        controller: "overviewCtrl"
    }).when("/tenants", {
        templateUrl: "app/tenants/tenants.html",
        controller: "tenantsCtrl"
    }).when("/messages", {
        templateUrl: "app/messages/messages.html",
        controller: "messagesCtrl"
    }).when("/votings", {
        templateUrl: "app/votings/votings.html",
        controller: "votingsCtrl"
    }).when("/issues", {
        templateUrl: "app/issues/issues.html",
        controller: "issuesCtrl"
    }).otherwise({
        redirectTo: "/"
    })
})
