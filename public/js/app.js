var app = angular.module("bucaneers", ['ngRoute'])

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/bucaneers.html',
        controller: 'BucaneerController'
      })
      
});
