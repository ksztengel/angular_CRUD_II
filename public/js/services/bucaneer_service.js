// services/pirates_service.js
'use strict'
app.factory('BucaneerService', function($http) {
    return {
        all: function() {
            return $http.get('/api/bucaneers');
        },

        one: function(id) {
            return $http.get(`/api/bucaneers/${id}`)      
        },

        new: function(newBucaneer) {
            return $http.post('/api/bucaneers', newBucaneer);
        },

        edit: function(editBucaneer) {
            var id = editBucaneer.id
            return $http.put(`/api/bucaneers/${id}`, editBucaneer);
        },

        delete: function(id) {
            return $http.delete(`/api/bucaneers/${id}`);
        }

    }

})
