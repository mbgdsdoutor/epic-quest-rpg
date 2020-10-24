import { Component } from '@angular/core';

@Component({
  selector: 'ficha-stepper',
  templateUrl: './ficha-stepper.component.html',
  styleUrls: ['./ficha-stepper.component.scss']
})
export class FichaStepperComponent {

  steps: string[] = [Steps.basicInfo, Steps.raceInfo, Steps.classInfo, Steps.attributeInfo]
  activeStep:number = 0

  constructor() { }

  changeStep(stepNumber: number): void {
    this.activeStep = stepNumber;
  }

  previousStep(): void {
    this.activeStep--;
  }

  nextStep(): void {
    if(this.activeStep !== 3) {
      this.activeStep++;
    } else {
      // salvar ficha
    }
  }
}

export enum Steps {
  basicInfo = 'Informações Básicas',
  raceInfo = 'Informações de Raça',
  classInfo = 'Informações de Classe',
  attributeInfo = 'Informações de Atributos'
}