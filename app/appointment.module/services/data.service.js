
angular
    .module('appointmentModule')
    .service("dataService", function ($http, $q,$cookies) {
        var $service = this;
        $service.redirectToAppointment = false;
        $service.router = {};
        $service.getDoctorsByQuerry = function (querry) {
            var deffered = $q.defer();
            $http({
                method: 'GET',
                url: 'http://www.mocky.io/v2/58961eab29000091253f4397' //+querry
            }).then(function successCallback(response) {
                deffered.resolve(response);
            }, function errorCallback(error) {
                deffered.reject('an error has occured during server call' + error);
            });
            return deffered.promise;
        }

        $service.getSpecsByQuerry = function () {
            var deffered = $q.defer();
            $http({
                method: 'GET',
                url: 'http://www.mocky.io/v2/589259a30f0000a8069656d2'
            }).then(function successCallback(response) {
                deffered.resolve(response);
            }, function errorCallback(error) {
                deffered.reject('an error has occured during server call' + error);
            });
            return deffered.promise;
        }

        $service.getDoctorById = function (id) {
            var deffered = $q.defer();
            $http({
                method: 'GET',
                url: 'http://www.mocky.io/v2/58961ef7290000ac253f4398' // +id
            }).then(function successCallback(response) {
                deffered.resolve(response);
            }, function errorCallback(error) {
                deffered.reject('an error has occured during server call' + error);
            });
            return deffered.promise;
        }

        $service.getSearchResultsByCriteria = function (spec, adress, date, lang) {
            var deffered = $q.defer();
            $http({
                method: 'GET',
                url: 'http://www.mocky.io/v2/5892557f0f000050069656cc' //+spec,adress,date,lang
            }).then(function successCallback(response) {
                deffered.resolve(response);
            }, function errorCallback(error) {
                deffered.reject('an error has occured during server call' + error);
            });
            return deffered.promise;
        }

        $service.getLocationsByCriteria = function (query) {
            var deffered = $q.defer();
            delete $http.defaults.headers.common['X-Requested-With'];
            $http({
                method: 'POST',
                url: "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=" + query + "&types=geocode&key=AIzaSyBg64bcKa3w5aBZXQXF88cv2Eu7lEjtuSc",
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(function successCallback(response) {
                deffered.resolve(response);
            }, function errorCallback(error) {
                deffered.reject('an error has occured during server call' + error);
            });
            return deffered.promise;
        }


        $service.connect = function (user, password) {
            $cookies.put("user", user, []); // FIXME cript the cookies on the server and set them in the browser as a connection string
            $cookies.put("password", password, []);
            if ($service.redirectToAppointment && $service.isConnected()) {
                $('#schedulerDetails').modal('show');
            }
        }

        $service.deConnect = function () {
            $cookies.remove("user", []); 
            $cookies.remove("password", []);
        }

        $service.isConnected = function () {
            return ( $cookies.get("user") == "user" && $cookies.get("password") == "user");
        }

        $service.signUp = function(signupFields){
            console.log('sign up with fields : '+signupFields)
        }
        $service.verifyCode = function(code){
            return code == "1122";
        }

 
    });