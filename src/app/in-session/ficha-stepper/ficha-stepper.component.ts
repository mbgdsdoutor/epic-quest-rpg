import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdventureService } from 'src/app/out-of-session/services/adventure.service';
import { FichaService } from 'src/app/out-of-session/services/ficha.service';
import { AlertService } from 'src/app/shared/alert.service';
import { LoadingService } from 'src/app/shared/loading/loading.service';
import { Adventure } from 'src/app/shared/models/adventure';
import { Player } from 'src/app/shared/models/player';
import { TokenStorageService } from 'src/app/token-storage.service';
import { fullPericiasMock } from 'src/app/utils/mocks';

@Component({
  selector: 'ficha-stepper',
  templateUrl: './ficha-stepper.component.html',
  styleUrls: ['./ficha-stepper.component.scss']
})
export class FichaStepperComponent implements OnInit {

  steps: string[] = [Steps.basicInfo, Steps.originAndAlignment, Steps.raceInfo, Steps.classInfo, Steps.attributeInfo]
  activeStep: number = 0
  ficha: Player
  urlId: number
  adventure: Adventure

  constructor(
    private tokenService: TokenStorageService,
    private loadingService: LoadingService,
    private alertService: AlertService,
    private router: Router,
    private fichaService: FichaService,
    private adventureService: AdventureService) {
    this.urlId = parseInt(this.router.url.split('/').pop(), 10);
  }

  ngOnInit() {
    const user = this.tokenService.getLoggedUser();
    this.adventureService.findById(this.urlId).subscribe(response => {
      console.log('adventure', response);
      this.adventure = response;
    })
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
    if (this.activeStep !== this.steps.length - 1) {
      this.activeStep++;
    } else {
      this.configuraFicha();
    }
  }

  configuraFicha() {
    const displacement = this.ficha.race.displacement;
    const items = this.ficha.origem.items;
    const lifePoints = this.ficha.class.initialLifePoints;
    const manaPoints = this.ficha.class.initialManaPoints;
    const totalLifePoints = this.ficha.class.initialLifePoints;
    const totalManaPoints = this.ficha.class.initialManaPoints;
    const poderes = [...this.ficha.poderes, ...this.ficha.race.poderes, ...this.ficha.origem.poderes]
    const caPoints = 10;

    const fichaToSave: Player = { ...this.ficha, displacement, items, lifePoints, manaPoints, totalLifePoints, totalManaPoints, poderes, caPoints }
    console.log(fichaToSave)
    console.log(JSON.stringify(fichaToSave).length)
    this.salvarFicha(fichaToSave);
  }

  salvarFicha(fichita: Player) {
    this.loadingService.startLoadingBar();
    this.fichaService.createFicha(fichita, this.urlId).subscribe(response => {
      this.alertService.success('Ficha criada com sucesso!');
      this.loadingService.stopLoadingBar();
    }, (err) => {
      this.loadingService.stopLoadingBar();
      this.alertService.error('Erro ao salvar ficha.')
    })
  }

  // salvarFiacha(fichita: Player) {
  //   // salva as paradas
  //   this.loadingService.startLoadingBar();
  //   this.adventureService.saveAllItens(fichita.items).subscribe(items => {
  //     /* */
  //   }, (err) => {
  //     this.alertService.error('Erro ao salvar ficha!');
  //     this.loadingService.stopLoadingBar();
  //   }).add(() => {
  //     this.adventureService.saveAllPoderes(fichita.poderes).subscribe(poderes => {
  //       /* */
  //     }, (err) => {
  //       this.alertService.error('Erro ao salvar ficha!');
  //       this.loadingService.stopLoadingBar();
  //     })
  //   }).add(() => {
  //     this.fichaService.createFicha(fichita).subscribe(ficha => {
  //       this.alertService.success('Ficha criada com sucesso!');
  //       this.loadingService.stopLoadingBar();
  //     }, (err) => {
  //       this.alertService.error('Erro ao salvar ficha!');
  //       this.loadingService.stopLoadingBar();
  //     })
  //   })


  // }
}

export enum Steps {
  basicInfo = 'Informações Básicas',
  originAndAlignment = 'Alinhamento e Origem',
  attributeInfo = 'Atributos',
  classInfo = 'Informações de Classe',
  raceInfo = 'Informações de Raça',
}