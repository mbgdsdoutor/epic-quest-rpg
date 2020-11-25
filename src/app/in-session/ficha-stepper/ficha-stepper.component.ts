import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/shared/models/player';
import { TokenStorageService } from 'src/app/token-storage.service';

@Component({
  selector: 'ficha-stepper',
  templateUrl: './ficha-stepper.component.html',
  styleUrls: ['./ficha-stepper.component.scss']
})
export class FichaStepperComponent implements OnInit {

  steps: string[] = [Steps.basicInfo, Steps.originAndAlignment, Steps.raceInfo, Steps.classInfo, Steps.attributeInfo]
  activeStep: number = 0
  ficha: Player

  constructor(
    private tokenService: TokenStorageService) {
  }

  ngOnInit() {
    const user = this.tokenService.getLoggedUser();
    this.ficha = {
      name: '',
      photoUrl: '',
      userId: user.id,
      nivel: 1,
      experience: 0,
      // experiencePerLevel?: ExperiencePerLevel;
      adventureId: null,
      class: null,
      race: null,
      alignment: null,
      age: null,
      origem: null,
      lifePoints: null,
      manaPoints: null,
      totalLifePoints: null,
      totalManaPoints: null,
      caPoints: null,
      displacement: null,
      strength: 10,
      wisdom: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      charisma: 10,
      items: [],
      pericias: [],
      poderes: [],
      tibar: 0,
      deus: null,
    }
  }

  changeStep(stepNumber: number): void {
    this.activeStep = stepNumber;
  }

  previousStep(): void {
    this.activeStep--;
  }

  nextStep(): void {
    console.log('MADOKA! ', this.ficha)
    if (this.activeStep !== 3) {
      this.activeStep++;
    } else {
      // salvar ficha
    }
  }

  updateBasicInfo(data: any) {
    console.log(data)
  }
}

export enum Steps {
  basicInfo = 'Informações Básicas',
  originAndAlignment = 'Alinhamento e Origem',
  attributeInfo = 'Atributos',
  classInfo = 'Informações de Classe',
  raceInfo = 'Informações de Raça',
}