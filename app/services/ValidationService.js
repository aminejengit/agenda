app.service("validationService", function (dataService) {
    this.validInputs = false;
    this.doctorOrCenter = false;
    this.spec = false;
    this.local = false;

    this.setBooleanVal = function (autocompleteName, querry) {
        var value;
        if (querry.length > 0) {
            value = true;
        } else {
            value = false;
        }
        switch (autocompleteName) {
            case "Médecin ou Centre ou Clinique": {
                this.doctorOrCenter = value;
            }
                break;
            case "Spécialité": {
                this.spec = value;
            }
                break;
            case "Canton ou commune ou adresse": {
                this.local = value;
            }

                break;
            default:
                return []
        }
    }

    this.isValidInputs = function () {
        if (this.doctorOrCenter || (
            this.local
        )) {
            return true;
        } else {
            return false;
        }
    }
});