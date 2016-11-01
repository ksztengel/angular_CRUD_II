app.controller('BucaneerController', function ($scope,BucaneerService) {

      $scope.view={}
  BucaneerService.all().then(bucaneers => {
      console.log('bucaneers', bucaneers.data);
      $scope.bucaneers = bucaneers.data
  })

})
