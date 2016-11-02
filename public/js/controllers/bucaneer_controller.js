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
