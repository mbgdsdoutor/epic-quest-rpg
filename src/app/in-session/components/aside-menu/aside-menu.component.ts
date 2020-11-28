import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AdventureService } from 'src/app/out-of-session/services/adventure.service';
import { AlertService } from 'src/app/shared/alert.service';

@Component({
  selector: 'aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss']
})
export class AsideMenuComponent {

  @Input() isMaster: boolean;
  @Input() adventureId: number;
  @ViewChild('aside', { static: false }) aside: ElementRef;

  constructor(
    private alertService: AlertService,
    private router: Router,
    private adventureService: AdventureService
  ) { }

  toggleAside() {
    this.aside.nativeElement.classList.toggle('aside--open')
  }

  logoutSessao() {
    this.router.navigateByUrl('adventures/mine');
    // const adventure = this.adventureService.findById(this.adventureId).subscribe(response => {

    // }, (err) => {
    //   this.alertService.error('Erro ao sair da sessão!')
    // })
  }
}
