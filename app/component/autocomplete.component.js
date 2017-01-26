app.component('autocomplete', {
    bindings: {
        datatype: '@',
        placeholder : '@'
    },
    transclude: true,
    controller: function Controller(dataService, validationService, $timeout) {

        this.showOptions = false;
        this.querry = "";
        this.selected = "";
        this.change = function () {

            validationService.setBooleanVal(this.datatype, this.querry);

            this.propositions = this.selectSerchs();
            if (this.querry.length > 0) {
                this.showOptions = true;
            } else {
                this.showOptions = false;
            }
        }
        this.select = function (option) {
            this.setdata(option);
            if (option != "close") {
                this.querry = option;
            } else {
                this.querry = "";
                validationService.setBooleanVal(this.datatype, this.querry);
            }
            this.showOptions = false;
        }
        this.selectSerchs = function () {
            switch (this.datatype) {
                case "doctor":
                    return dataService.getSearchDoctors(this.querry);
                case "spec":
                    return dataService.getSearchSpecs(this.querry);
                case "local":
                    return dataService.getSearchLocals(this.querry);
                default:
                    return []
            }
        }

        this.setdata = function (data) {
            switch (this.datatype) {
                case "doctor":
                    dataService.selecteddoctorName = data;
                    break;
                case "spec":
                    dataService.selectedspec = data;
                    break;
                case "local":
                    dataService.selectedlocal = data;
                    break;
                default:
                    return []
            }
        }


    },
    templateUrl: '/partials/autocomplete.html'
});
