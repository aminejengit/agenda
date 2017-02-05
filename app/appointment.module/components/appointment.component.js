angular
    .module('appointmentModule')
    .component('appointment', {
        transclude: true,
        $canActivate: function (dataService) {
            return dataService.isConnected();
        },
        controller: function appointmentController() {

        },
        templateUrl: '/partials/appointment.component.html'
    });