import { Component } from '@angular/core';
import { Doctor } from '../models/Doctor';
import { DataService } from '../services/data.service';
import { OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';




@Component({
  selector: 'intro-component',
  templateUrl: `/partials/index-intro.html`,
  providers: [DataService]
})
export class IntroComponent {
  doctors: Doctor[];
  selectedDoctorProfile: Doctor;
  @Output() onProfileOpen = new EventEmitter<boolean>();
  @Output() onProfileClose = new EventEmitter<boolean>();

  setSelectedDoctorProfile(doctor: Doctor): void {
    this.selectedDoctorProfile = doctor;
  }
  constructor(private dataService: DataService) {
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.dataService.getAllDoctors().then(doctors => this.doctors = doctors);
  }
  showSection = "intro"
  showSecondView = "slider";
  showSLider(): void {
    this.showSecondView = "slider";
  }
  showResult(): void {
    this.showSecondView = "result";
  }
  showProfile(doctor: Doctor): void {
    this.setSelectedDoctorProfile(doctor);
    this.onProfileOpen.emit(true);
    this.showSection = "profile";
  }
  showIntro(): void {
    this.onProfileClose.emit(true);
    this.showSection = "intro";
  }
} 