angular
    .module('myApp')
    .component('app', {

        transclude: true,
        controller: function appController(dataService) {
        },
        templateUrl: '/partials/app.component.html',

        $routeConfig: [
            { path: '/search/...', name: 'Search', component: 'search', useAsDefault: true },
            { path: '/profile/:id', name: 'Profile', component: 'profile' },
            { path: '/appointment', name: 'Appointment', component: 'appointment' },
            { path: '/patient/...', name: 'Patient', component: 'patient' }
        ]

    });
