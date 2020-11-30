import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Player } from 'src/app/shared/models/player';
import { TokenStorageService } from 'src/app/token-storage.service';
import { experienceMock } from 'src/app/utils/mocks';

@Component({
  selector: 'ficha-viewer',
  templateUrl: './ficha-viewer.component.html',
  styleUrls: ['./ficha-viewer.component.scss']
})
export class FichaViewerComponent {
  @Output() hideFicha: EventEmitter<any> = new EventEmitter();
  @Input() isMaster: boolean;
  @Input() fichas: Player[];
  activeFicha: Player;
  userId: number;
  experiencesPerLevel = experienceMock;
  activeTab: number = 1;

  constructor(
    private tokenService: TokenStorageService
  ) { }

  ngOnInit() {
    this.userId = this.tokenService.getLoggedUser().id;
    this.userId = 2;
    if (this.isMaster) {
      this.activeFicha = this.fichas[0];
    } else {
      this.activeFicha = this.fichas.filter(f => f.userId === this.userId)[0]
    }
  }

  changeActive() {

  }

  changeActiveTab(tab: number) {
    this.activeTab = tab;
  }

  emitHideFicha() {
    this.hideFicha.emit(false);
  }
}
