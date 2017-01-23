import { Injectable } from '@angular/core';
import { Doctor } from '../models/Doctor';

const DOCTORS: Doctor[] = [
    { picture: "assets/onepage2/img/avatar/1.png", name: 'DR. Thomas MOTTAT', spec: "Généraliste", location: "Onex / Genève" ,adress:[""],web:"",phone:[""],fmh:"",specDescription:"",formations:[""],gln:""},
    { picture: "assets/onepage2/img/avatar/2.png", name: 'DR. Monique DUNANT', spec: "Dermatologue", location: "Lancy / Genève",adress:[""],web:"",phone:[""],fmh:"",specDescription:"",formations:[""],gln:""},
    { picture: "assets/onepage2/img/avatar/3.png", name: 'R. Jean FAVRE', spec: "Gynécologue", location: "Nyon / Vaud",adress:[],web:"",phone:[""],fmh:"",specDescription:"",formations:[""],gln:""},
    { picture: "assets/onepage2/img/avatar/4.png", name: 'DR. Denis CHEVRELEY', spec: "Généraliste", location: "Avry / Fribourg",adress:[""],web:"",phone:[""],fmh:"",specDescription:"",formations:[""],gln:""},
    { picture: "assets/onepage2/img/avatar/5.png", name: 'DR. Jacqueline DUPONT', spec: "Généraliste", location: "Vex / Valais",adress:[""],web:"",phone:[""],fmh:"",specDescription:"",formations:[""],gln:""},

];
@Injectable()
export class DataService {
    getAllDoctors(): Promise<Doctor[]> {
        return Promise.resolve(DOCTORS);
    }
}