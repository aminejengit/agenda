
app.service("dataService", function () {
    this.mockedDoctors = [
        { picture: "assets/onepage2/img/avatar/1.png", name: 'DR. Hamadi Kharrat', spec: "Généraliste", location: "Onex / Genève" },
        { picture: "assets/onepage2/img/avatar/2.png", name: 'DR. Monique DUNANT', spec: "Dermatologue", location: " ncy / Genève" },
        { picture: "assets/onepage2/img/avatar/3.png", name: 'R. Jean FAVRE', spec: "Gynécologue", location: "Nyon / Vaud" },
        { picture: "assets/onepage2/img/avatar/4.png", name: 'DR. Denis CHEVRELEY', spec: "Généraliste", location: "Avry / Fribourg" },
        { picture: "assets/onepage2/img/avatar/5.png", name: 'DR. Jacqueline DUPONT', spec: "Généraliste", location: "Vex / Va is" }
    ];


    this.mockedDoctorNames= ["","DR. Hamadi Kharrat","DR. Monique DUNANT","R. Jean FAVRE","DR. Denis CHEVRELEY","DR. Jacqueline DUPONT"];


    this.mockedSpecs = ["","cardiologie", "chirurgie", "dermatologie", "gynécologie", "médecine générale", "néonatologie",
        "néphrologie", "neurologie","odontologie","oncologie","obstétrique","ophtalmologie","orthopédie","pédiatrie",
        "pneumologie","psychiatrie","radiologie","radiothérapie","rhumatologie"];

    this.mockedAdress = ["","Alabama", "Alaska", "Arizona", "Arkansas", "California",
        "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii",
        "Idaho"
    ];


    this.getDoctorsEntities = function (querry) {
        return this.mockedDoctors;
    }
    this.getSearchDoctors = function (querry) {
        return this.filterby(this.mockedDoctorNames,querry);
    }
    this.getSearchSpecs = function (querry) {
        return this.filterby(this.mockedSpecs,querry);
    }
    this.getSearchLocals = function (querry) {
        return this.filterby(this.mockedAdress,querry);
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

});