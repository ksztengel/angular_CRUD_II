'use strict'
app.controller('BucaneerController', function ($scope,BucaneerService) {

      $scope.view={}
  BucaneerService.all().then(bucaneers => {
      // console.log('bucaneers', bucaneers.data);
      $scope.bucaneers = bucaneers.data
  })

  $scope.submitNew = function(){
  BucaneerService.new($scope.post).then(newBucaneer =>{
              $scope.bucaneers.push($scope.post),
              $scope.post = {},
              $scope.postForm.$setPristine(),
              $scope.newBucaneer = {}
      })
    }
})

app.controller('OneBucaneerController', function($scope, BucaneerService,$routeParams){

        var id = $routeParams.id
        console.log('id', id);
        BucaneerService.one(id).then(results =>{
          console.log('results:', results);
              $scope.oneBucaneer = results.data

          })

})

app.controller('EditBucaneerController', function($scope, BucaneerService,$routeParams){

        var id = $routeParams.id
        console.log('id', id);
        BucaneerService.edit(id).then(results =>{
          console.log('results:', results);
              $scope.oneBucaneer = results.data

          })

})
app.controller('DeleteBucaneerController', function($scope, BucaneerService,$routeParams){
        var id = $routeParams.id
        console.log('id', id);
        BucaneerService.delete(id).then(results =>{
          console.log('results:', results);
              $scope.oneBucaneer = results.data

          })

})
