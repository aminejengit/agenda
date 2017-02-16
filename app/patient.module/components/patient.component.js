angular
    .module('patientModule')
    .component('patient', {
        transclude: true,
        $canActivate: function (dataService) {
            return dataService.isConnected();
        },
         $routeConfig: [
            { path: '/profile', name: 'Patientprofile', component: 'patientprofile', useAsDefault: true },
            { path: '/doctors', name: 'Patientdoctors', component: 'patientdoctors' },
            { path: '/proposing', name: 'Proposing', component: 'proposing' },
            { path: '/relatives', name: 'Relatives', component: 'relatives' },
            { path: '/appointments', name: 'Appointments', component: 'patientappointments' },
        ],
        controller: function patientProfileController() {
            var $ctrl = this;
            $ctrl.profileView=1;
            $ctrl.selectProfileView = function (viewnNumber) {
                $ctrl.profileView = viewnNumber;
            }
        },
        templateUrl: '/partials/patient.component.html'
    });