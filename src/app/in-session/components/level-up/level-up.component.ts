import { Component } from '@angular/core';
import { User } from 'src/app/out-of-session/models/user';
import { FichaService } from 'src/app/out-of-session/services/ficha.service';
import { AlertService } from 'src/app/shared/alert.service';
import { AttributesEnum } from 'src/app/shared/enums/attributes-enum';
import { LoadingService } from 'src/app/shared/loading/loading.service';
import { Class, LevelUp } from 'src/app/shared/models/class';
import { Player } from 'src/app/shared/models/player';
import { Poder } from 'src/app/shared/models/poder';
import { TokenStorageService } from 'src/app/token-storage.service';
import { arcanistLevelUpMock, barbarianLevelUpMock, bardLevelUpMock, druidLevelUpMock, warriorLevelUpMock } from 'src/app/utils/classMocks';

@Component({
  selector: 'level-up',
  templateUrl: './level-up.component.html',
  styleUrls: ['./level-up.component.scss']
})
export class LevelUpComponent {

  loggedUser: User;
  actualLevel: number;
  actualFicha: Player;
  isLevelingUp: boolean = false;
  atributo: string;
  attributes: string[] = [AttributesEnum.Charisma, AttributesEnum.Constitution, AttributesEnum.Dexterity, AttributesEnum.Intelligence, AttributesEnum.Strength, AttributesEnum.Wisdom];
  levelUpObject: LevelUp;
  habilidade: Poder;
  magias: Poder[];

  constructor(
    private tokenService: TokenStorageService,
    private loadingService: LoadingService,
    private alertService: AlertService,
    private fichaService: FichaService
  ) { }

  ngOnInit() {
    this.loggedUser = this.tokenService.getLoggedUser();
    setInterval(this.checkFichaLevelUp, 3000);
  }

  setLevelUpObject(classe: Class, newLevel: number) {
    if (classe.id === 1) {
      this.levelUpObject = arcanistLevelUpMock(classe.arcanistWay)[`level${newLevel}`];
    } else if (classe.id === 2) {
      this.levelUpObject = barbarianLevelUpMock[`level${newLevel}`];
    } else if (classe.id === 3) {
      this.levelUpObject = bardLevelUpMock(classe.magicSchoolsAllowed)[`level${newLevel}`];
    } else if (classe.id === 4) {
      this.levelUpObject = druidLevelUpMock(classe.magicSchoolsAllowed)[`level${newLevel}`];
    } else if (classe.id === 5) {
      this.levelUpObject = warriorLevelUpMock[`level${newLevel}`];
    }
  }

  checkFichaLevelUp() {
    this.fichaService.getFichaByUserId(this.loggedUser.id).subscribe(response => {
      if (this.actualLevel === undefined) {
        this.actualLevel = response.nivel;
      }
      if (response.nivel > this.actualLevel) {
        console.log('LEVEL UP');
        this.actualFicha = response;
        this.setLevelUpObject(response.class, response.nivel);
        this.isLevelingUp = true;
        document.querySelector('#level-up').classList.add('showModal');
      }
    })
  }

  salvarFicha() {
    this.loadingService.startLoadingBar();
    const fichita = this.actualFicha;
    fichita.poderes = [...this.actualFicha.poderes, this.habilidade, ...this.magias, ...this.levelUpObject.fixedPowers];
    this.fichaService.updateFicha(fichita).subscribe(response => {
      this.isLevelingUp = false;
      this.actualFicha = undefined;
      this.loadingService.stopLoadingBar();
      this.alertService.success('Ficha atualizada com sucesso!');
      document.querySelector('#level-up').classList.remove('showModal');
    })
  }

  // closeXpManager() {
  //   document.querySelector('#xp-manager').classList.remove('showModal');
  // }

}