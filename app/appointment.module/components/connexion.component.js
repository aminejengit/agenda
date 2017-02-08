angular
    .module('appointmentModule')
    .component('connexion', {
        transclude: true,
        controller: function connexionController(dataService) {
            var $ctrl = this;
            $ctrl.connectionError = false;
            $ctrl.isconnected = false;
            $ctrl.name = '';
            $ctrl.mail = '';
            $ctrl.mobile = '';
            $ctrl.password = '';
            $ctrl.confirmPassword = '';

            $ctrl.passwordMatchVerif = function () {
                $ctrl.showError = ($ctrl.confirmPassword != $ctrl.password)
                return $ctrl.confirmPassword == $ctrl.password;
            }
            $ctrl.connect = function () {
                dataService.connect($ctrl.username, $ctrl.password);
                if (dataService.isConnected()) {
                    $ctrl.connectionError = false;
                } else {
                    $ctrl.connectionError = true;
                }
            }
            $ctrl.deDonnect = function () {
                dataService.deConnect();
            }
            $ctrl.isConnected = function () {
                return dataService.isConnected();
            }

            $ctrl.require = function (field) {
                console.log($ctrl[field]);
                if ($ctrl[field] != null && $ctrl[field].length < 1) {
                    $ctrl[field + 'require'] = true;
                } else {
                    $ctrl[field + 'require'] = false;
                }
            }

            $ctrl.signUp = function () {
                var signupFields = [];
                signupFields.push($ctrl.name);
                signupFields.push($ctrl.mail);
                signupFields.push($ctrl.mobile);
                signupFields.push($ctrl.password);
                signupFields.push($ctrl.confirmPassword);
                if (signupFields != null && test(signupFields) && $ctrl.passwordMatchVerif()) {
                    $ctrl.showValidationError = false;
                    dataService.signUp(signupFields);
                    $('#responsive').modal('hide');
                    $('#inscription').modal('hide');
                    $('#step1').modal('show');
                } else {
                    $ctrl.showValidationError = true;
                }
            }
            $ctrl.validateCode = function () {
                var code = $ctrl.key1 + $ctrl.key2 + $ctrl.key3 + $ctrl.key4;
                if (dataService.verifyCode(code)) {
                    $('#step1').modal('hide');
                    $('#step2').modal('show');
                }
                //return dataService.verifyCode(code);
            }
            function test(fields) {
                for (field in fields) {
                    if (fields[field].length < 1) {
                        return false;
                    }
                }
                return true;
            }

        },
        templateUrl: '/partials/connexion.component.html'
    })
