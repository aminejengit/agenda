angular
    .module('appointmentModule')
    .component('appointment', {
        transclude: true,
         $routeConfig: [
            { path: '/search/...', name: 'Search', component: 'search', useAsDefault: true },
            { path: '/profile/:id', name: 'Profile', component: 'profile' },
        ]

        ,
        controller: function appointmentController() {

        },
        templateUrl: '/partials/appointment.component.html'
    });