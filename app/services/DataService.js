
app.service("dataService", function () {
    var self = this;

    self.selecteddoctorName = "#";
    self.selectedspec = "#";
    self.selectedlocal = "#";

    this.mockedDoctors = [
        { picture: "assets/onepage2/img/avatar/1.png", name: 'DR. Ben Thompson', spec: "cardiologie", location: "Onex / Genève" },
        { picture: "assets/onepage2/img/avatar/2.png", name: 'DR. Monique DUNANT', spec: "gynécologie", location: " ncy / Genève" },
        { picture: "assets/onepage2/img/avatar/3.png", name: 'R. Jean FAVRE', spec: "pédiatrie", location: "Nyon / Vaud" },
        { picture: "assets/onepage2/img/avatar/4.png", name: 'DR. Denis CHEVRELEY', spec: "néonatologie", location: "Avry / Fribourg" },
        { picture: "assets/onepage2/img/avatar/5.png", name: 'DR. Jacqueline DUPONT', spec: "radiologie", location: "Vex / Va is" }
    ];


    this.getmockedDoctorvalues = function (key) {
        var result = [];
        for (doctor in self.mockedDoctors) {
            result.push(self.mockedDoctors[doctor]['' + key]);
        }
        return result;
    }


    this.getDoctorsEntities = function (querry) {
        return self.filterdoctors();
    }
    this.getSearchDoctors = function (querry) {
        return this.filterby(this.getmockedDoctorvalues("name"), querry);
    }
    this.getSearchSpecs = function (querry) {
        return this.filterby(this.getmockedDoctorvalues("spec"), querry);
    }
    this.getSearchLocals = function (querry) {
        return this.filterby(this.getmockedDoctorvalues("location"), querry);
    }

    this.filterby = function (table, querry) {
        var result = ["close"];
        for (elmt in table) {
            if (table[elmt].toLowerCase().includes(querry.toLowerCase())) {
                result.push(table[elmt]);
            }
        }
        return result;
    }

    this.filterdoctors = function () {
        var result = [];
        var doctorIterator;
        for (doctor in self.mockedDoctors) {
            doctorIterator = self.mockedDoctors[doctor];
            if (self.selecteddoctorName == "") {
                self.selecteddoctorName = "#";
            }
            if (self.selecteddoctorName != "" && self.selecteddoctorName != "#") {
                self.selectedspec = "#";
                self.selectedlocal = "#"
            }
            if (doctorIterator.name.toLowerCase().includes(self.selecteddoctorName.toLowerCase()) || (doctorIterator.spec.toLowerCase().includes(self.selectedspec.toLowerCase())) && (doctorIterator.location.toLowerCase().includes(self.selectedlocal.toLowerCase()))) {
                result.push(doctorIterator);
            }


        }
        return result;
    }

});