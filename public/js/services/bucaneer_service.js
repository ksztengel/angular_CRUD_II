// services/pirates_service.js
'use strict'
app.factory('BucaneerService', function ($http) {
  return {
    all: function() {
      return $http.get('/api/bucaneers');

        },

    one: function(id) {
      return $http.get(`/api/bucaneers/${id}`)
      console.log('id', id);
    },

    new: function(newBucaneer) {
      return $http.post('/api/bucaneers', newBucaneer);
    },

    edit: function(newBucaneer) {
      return $http.put('/api/bucaneers', newBucaneer);
    },

    delete: function(newBucaneer) {
      return $http.delete('/api/bucaneers', newBucaneer);
    }

      }

})
