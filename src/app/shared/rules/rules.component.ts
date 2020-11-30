import { Component } from '@angular/core';

@Component({
  selector: 'rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent {

  constructor() { }

  closeRules() {
    document.querySelector('#rules').classList.remove('showModal');
  }
}
