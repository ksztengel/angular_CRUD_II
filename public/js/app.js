var app = angular.module("bucaneers", ['ngRoute'])

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/bucaneers.html',
        controller: 'HomeController'
      })
      .when('/show_page/:id', {
        templateUrl: 'partials/show_page.html',
        controller: 'HomeController'
      })
});
