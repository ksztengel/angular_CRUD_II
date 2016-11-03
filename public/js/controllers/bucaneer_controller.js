'use strict'
app.controller('BucaneerController', function($scope, BucaneerService) {

    $scope.view = {}
    BucaneerService.all().then(bucaneers => {
        $scope.bucaneers = bucaneers.data
    })

    $scope.submitNew = function() {
        BucaneerService.new($scope.post).then(newBucaneer => {
            $scope.bucaneers.push($scope.post),
                $scope.post = {},
                $scope.postForm.$setPristine(),
                $scope.newBucaneer = {}
        })
    }
})

app.controller('OneBucaneerController', function($scope, BucaneerService, $routeParams, $location) {

    var id = $routeParams.id
    BucaneerService.one(id).then(results => {
        $scope.oneBucaneer = results.data

    })

    $scope.someFunction = function(id) {
        BucaneerService.delete(id).then(results => {
            $location.url('/')

        })
    }

    $scope.submitEdit = function() {
        const editBucaneer = $scope.oneBucaneer
        BucaneerService.edit(editBucaneer).then(results => {
            console.log('edit', $scope.editBucaneer);
            $location.url('/')

        })
    }
})
