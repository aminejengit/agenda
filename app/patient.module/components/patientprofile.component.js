angular
    .module('patientModule')
    .component('patientprofile', {
        transclude: true,
        $canActivate: function (dataService) {
            return dataService.isConnected();
        },
        controller: function patientProfileController() {
            var $ctrl = this;
            $ctrl.profileView=1;
            $ctrl.selectProfileView = function (viewnNumber) {
                $ctrl.profileView = viewnNumber;
            }
        },
        templateUrl: '/partials/patientprofile.component.html'
    });