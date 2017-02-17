angular
    .module('appointmentModule')
    .component('home', {
        transclude: true,
        $canActivate: function (dataService) {
            return dataService.isConnected();
        },
        controller: function homeController() {

        },
        templateUrl: '/partials/home.component.html',
        $routeConfig: [
            { path: '/search/...', name: 'Search', component: 'search', useAsDefault: true },
            { path: '/profile/:id', name: 'Profile', component: 'profile' },
            { path: '/appointment', name: 'Appointment', component: 'appointment' }
        ]
    });