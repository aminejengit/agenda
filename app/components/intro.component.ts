import { Component } from '@angular/core';
import { Doctor } from '../models/Doctor';
import { DataService } from '../services/data.service';
import { OnInit } from '@angular/core';




@Component({
  selector: 'intro-component',
  templateUrl: `/partials/index-intro.html`,
  providers: [DataService]
})
export class IntroComponent {
  doctors:Doctor[];
  
  constructor(private dataService: DataService) {
  }
 
  
  
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
  this.dataService.getAllDoctors().then(doctors => this.doctors = doctors);
}

  showSecondView = "slider";
  showSLider(): void {
    this.showSecondView = "slider";
  }
  showResult(): void {
    this.showSecondView = "result";
  }
} 