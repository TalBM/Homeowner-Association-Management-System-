var app = angular.module("vaad", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "app/landingpage/landingpage.html"
    }).when("/login", {
        templateUrl: "/app/login/login.html",
        controller: "loginCtrl"
    }).when("/signup", {
        templateUrl: "/app/login/signup.html",
        controller: "signupCtrl"
    }).when("/tenants", {
        templateUrl: "/app/login/tenants.html",
        controller: "tenantsCtrl"
    }).when("/messages", {
        templateUrl: "/app/login/messages.html",
        controller: "messagesCtrl"
    }).when("/votings", {
        templateUrl: "/app/login/votings.html",
        controller: "votingsCtrl"
    }).when("/issues", {
        templateUrl: "/app/login/issues.html",
        controller: "issuesCtrl"
    }).otherwise({
        redirectTo: "/"
    })
})
