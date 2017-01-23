import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { Doctor } from '../models/Doctor';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'intro-profile',
  templateUrl: `/partials/intro-profile.html`,
})
export class IntroProfileCompnent {
     @Input()
     doctor:Doctor;
     @Output() onClose = new EventEmitter<boolean>();
     closeProfile():void {
         this.onClose.emit(true);
         this.doctor = new Doctor();
     }
} 