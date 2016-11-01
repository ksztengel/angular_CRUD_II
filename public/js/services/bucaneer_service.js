// services/pirates_service.js

app.factory('BucaneerService', function ($http) {
  return {
    all: function() {
      return $http.get('/api/bucaneers');
    }
  }
})
