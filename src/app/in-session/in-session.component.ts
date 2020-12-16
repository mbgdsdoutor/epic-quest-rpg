import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../out-of-session/models/user';
import { AdventureService } from '../out-of-session/services/adventure.service';
import { FichaService } from '../out-of-session/services/ficha.service';
import { AlertService } from '../shared/alert.service';
import { LoadingService } from '../shared/loading/loading.service';
import { Adventure } from '../shared/models/adventure';
import { Player } from '../shared/models/player';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-in-session',
  templateUrl: './in-session.component.html',
  styleUrls: ['./in-session.component.scss']
})
export class InSessionComponent {

  user: User;
  urlId: number;
  adventure: Adventure;
  isMaster: boolean;
  showFichaCreation: boolean = false;
  isFichaOpen: boolean = false;
  players: Player[] = [];

  constructor(
    private loadingService: LoadingService,
    private alertService: AlertService,
    private router: Router,
    private tokenService: TokenStorageService,
    private fichaService: FichaService,
    private adventureService: AdventureService) {

    this.urlId = parseInt(this.router.url.split('/').pop(), 10);
  }

  ngOnInit() {
    let responseward;
    this.loadingService.startLocalLoading('body');
    this.user = this.tokenService.getLoggedUser();
    this.adventureService.findById(this.urlId).subscribe(response => {
      console.log(`first step`)

      responseward = response;
      this.fichaService.getPlayersByAdventureId(responseward.id).subscribe(res => {
        console.log('ressssss', res)
        res.forEach(p => {
          const pl = p as unknown as {player: string, id: number, adventure: null}
          this.players.push({...JSON.parse(pl.player), id: pl.id});
        })
        if (this.players.filter(p => p.userId === this.user.id).length === 0) {
          this.showFichaCreation = true;
        }
        this.adventure = responseward;
        this.adventure.players = this.players;
        this.isMaster = this.adventure.mestre.id === this.user.id;
        this.loadingService.stopLocalLoading('body');
        this.alertService.success('Sessão Iniciada!');
        console.log(this.adventure)
      })
    }, (err) => {
      this.loadingService.stopLocalLoading('body');
      this.alertService.error('Erro ao iniciar sessão!');
    });
    //this.isMaster = this.adventure.mestre.id === this.user.id;

  }

  // showChat(): void {
  //   document.querySelector('.chat').classList.add('chat--open')
  // }

  showPencilOptions(): void {
    document.querySelector('#pencil-trigger').classList.toggle('active');
    document.querySelector('canvas').classList.toggle('active');
    document.querySelector('.pencil-options').classList.toggle('pencil-options--open');
  }

  showFicha(): void {
    this.isFichaOpen = true;
  }

  hideFicha(): void {
    console.log('EMITIDO!')
    this.isFichaOpen = false;
  }

  showDices(): void {
    document.querySelector('.dices').classList.toggle('dices--open')
  }

  showNotes(): void {
    document.querySelector('.notes').classList.toggle('notes--open')
  }
}
