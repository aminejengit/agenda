app.component('autocomplete', {
    bindings: {
        datatype: '@'
    },
    transclude: true,
    controller: function Controller(dataService,validationService,$timeout) {

        this.showOptions = false;
        this.querry = "";
        this.selected = "";
        this.change = function () {
            
            validationService.setBooleanVal(this.datatype,this.querry);
            
            this.propositions = this.selectSerchs();
            if (this.querry.length > 0) {
                this.showOptions = true;
            } else {
                this.showOptions = false;
            }
        }
        this.select = function (option) {
            this.setdata(option);
            if ( option != "close"){
                this.querry = option;
            } else{
                this.querry="";
                validationService.setBooleanVal(this.datatype,this.querry);
            }
            this.showOptions = false;
        }
        this.selectSerchs = function () {
            switch (this.datatype) {
                case "Médecin ou Centre ou Clinique":
                    return dataService.getSearchDoctors(this.querry);
                case "Spécialité":
                    return dataService.getSearchSpecs(this.querry);
                case "Canton ou commune ou adresse":
                    return dataService.getSearchLocals(this.querry);
                default:
                    return []
            }
        }

          this.setdata = function (data) {
            switch (this.datatype) {
                case "Médecin ou Centre ou Clinique":
                    return dataService.selecteddoctorName=data;
                case "Spécialité":
                    return dataService.selectedspec=data;
                case "Canton ou commune ou adresse":
                    return dataService.selectedlocal=data;
                default:
                    return []
            }
        }
    
       
    },
    templateUrl: '/partials/autocomplete.html'
});
