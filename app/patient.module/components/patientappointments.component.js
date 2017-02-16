angular
    .module('patientModule')
    .component('patientappointments', {
        transclude: true,
        $canActivate: function (dataService) {
            return dataService.isConnected();
        },
        controller: function proposingController() {
        },
        templateUrl: '/partials/patientappointments.component.html'
    });