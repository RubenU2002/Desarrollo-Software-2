import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
  selector: 'app-car-page',
  imports : [
    UpperCasePipe
  ],
  templateUrl: './car-page.html',
  styleUrl: './car-page.css'
})
export class CarPage {

  brand = signal('Mazda');
  year = signal(2023);
  student = signal('Ruben');
  getCarDescription = computed(() => `${this.brand()} - ${this.year()}`);
  capitalizeStudent = computed(() => this.student().toUpperCase());

  /*
  getCarDescription() {
    return `${this.brand()} - ${this.year()}`;
  }
  */

  changeCar() {
    this.brand.update(() => 'Kia');
    this.year.update(() => 2021);
  }

  resetForm() {
    this.brand.update(() => 'Renault');
    this.year.update(() => 2020);
  }

  changeYear() {
    this.year.update(() => 2025);
  }
}
