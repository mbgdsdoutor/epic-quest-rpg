import { Component, Input } from '@angular/core';
import { FichaService } from 'src/app/out-of-session/services/ficha.service';
import { AlertService } from 'src/app/shared/alert.service';
import { LoadingService } from 'src/app/shared/loading/loading.service';
import { Adventure } from 'src/app/shared/models/adventure';

@Component({
  selector: 'xp-manager',
  templateUrl: './xp-manager.component.html',
  styleUrls: ['./xp-manager.component.scss']
})
export class XPManagerComponent {
  @Input() aventura: Adventure;
  xpAmount: number;
  users: { display: string, value: number }[] = [];
  adventureUsers: { display: string, value: number }[] = [];

  constructor(
    private loadingService: LoadingService,
    private alertService: AlertService,
    private fichaService: FichaService
  ) { }

  ngOnInit() {
    console.log(this.aventura.players)
    this.users = [...this.aventura.players].map(p => {
      return { display: p.name, value: p.id }
    })
  }

  closeXpManager() {
    document.querySelector('#xp-manager').classList.remove('showModal');
  }

  updateFichas() {
    this.loadingService.startLocalLoading('#xp-manager .container');
    this.adventureUsers.forEach((u, index) => {
      const fichaToUpdate = this.aventura.players.find(p => p.id === u.value)
      fichaToUpdate.experience = fichaToUpdate.experience + this.xpAmount;
      this.fichaService.updateFicha(fichaToUpdate).subscribe(response => {
        if (index === this.adventureUsers.length) {
          this.loadingService.stopLocalLoading('#xp-manager .container');
          this.alertService.success('Experiência concedida com sucesso');
        }
      }, (err) => {
        this.loadingService.stopLocalLoading('#xp-manager .container');
        this.alertService.error('Erro ao conceder experiência.');
      })
    })
  }
}