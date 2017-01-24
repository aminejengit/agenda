var app = angular.module("myApp", ['ngMaterial', 'ngMessages', 'material.svgAssetsCache']);
app.controller("myCtrl", function($scope,dataService) {
    var self = this;
    // handle intro section
    $scope.introSection="slider";
    $scope.showSlider = function(){
        $scope.introSection="slider";
    }
    
    $scope.showResult = function(){
        console.log($scope.locality+"ffff");
        if($scope.locality != null){
            
            $scope.introSection="result";
        }   
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