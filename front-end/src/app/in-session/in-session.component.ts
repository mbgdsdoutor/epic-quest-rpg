import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../out-of-session/models/user';
import { AdventureService } from '../out-of-session/services/adventure.service';
import { AlertService } from '../shared/alert.service';
import { LoadingService } from '../shared/loading/loading.service';
import { Adventure } from '../shared/models/adventure';
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

  constructor(
    private loadingService: LoadingService,
    private alertService: AlertService,
    private activatedRoute: ActivatedRoute,
    private tokenService: TokenStorageService,
    private adventureService: AdventureService) {
    this.urlId = parseInt(this.activatedRoute.snapshot.params.id, 10);
  }

  ngOnInit() {
    this.loadingService.startLocalLoading('body');
    this.user = this.tokenService.getLoggedUser();
    this.adventureService.findById(this.urlId).subscribe(response => {
      this.adventure = response;
      this.loadingService.stopLocalLoading('body');
      this.alertService.success('Sessão Iniciada!');
    }, (err) => {
      this.loadingService.stopLocalLoading('body');
      this.alertService.error('Erro ao iniciar sessão!');
    })
    this.isMaster = this.adventure.master.id === this.user.id;
  }

  showChat(): void {
    document.querySelector('.chat').classList.add('chat--open')
  }

  showNotes(): void {
    document.querySelector('.notes').classList.add('notes--open')
  }
}
