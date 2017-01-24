var app = angular.module("myApp",[]);
app.controller("myCtrl", function($scope,dataService) {

    // handle intro section
    $scope.introSection="slider";
    $scope.localty="";
    $scope.showSlider = function(){
        $scope.introSection="slider";
    }
$scope.onvalueChange = function(){
    console.log($scope.local)
}
  
    
    $scope.showResult = function(){
        console.log($scope.localty+"ffff");      
            $scope.introSection="result";
           console.log($scope.introSection+"ffff");
    }
    //import search results
    $scope.doctors=dataService.getSearchDoctors();
    // select doctor to show his profile
    $scope.selectedDoctor={};
    $scope.showProfile = function(doctor){
        $scope.selectedDoctor = doctor;
        $scope.introSection="profile";
    }
});