var app = angular.module("bucaneers", ['ngRoute'])

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../views/bucaneers.html',
        controller: 'BucaneerController'
      })
      .when('/onebucaneer/:id', {
        templateUrl: '../views/onebucaneer.html',
        controller: 'OneBucaneerController'
      })
      
});
