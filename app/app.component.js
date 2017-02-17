angular
    .module('myApp')
    .component('app', {

        transclude: true,
        controller: function appController(dataService) {
        },
        templateUrl: '/partials/app.component.html',

        $routeConfig: [
            { path: '/appointment/...', name: 'Appointment', component: 'appointment', useAsDefault: true  },
            { path: '/patient/...', name: 'Patient', component: 'patient' }
        ]

    });
