import { Component, Input } from '@angular/core';

@Component({
  selector: 'exit-icon',
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" [ngStyle]="{width: width, height: heigth}" style="height: 512px; width: 512px;">
      <g class="" transform="translate(0,0)" style="touch-action: none;">
        <path [attr.fill]="fill" d="M217 28.098v455.804l142-42.597V70.697zm159.938 26.88l.062 2.327V87h16V55zM119 55v117.27h18V73h62V55zm258 50v16h16v-16zm0 34v236h16V139zm-240 58.727V233H41v46h96v35.273L195.273 256zM244 232c6.627 0 12 10.745 12 24s-5.373 24-12 24-12-10.745-12-24 5.373-24 12-24zM137 339.73h-18V448h18zM377 393v14h16v-14zm0 32v23h16v-23zM32 471v18h167v-18zm290.652 0l-60 18H480v-18z" fill-opacity="1"></path>
      </g>
    </svg>
  `,
})
export class ExitIcon {
  @Input() fill: string;
  @Input() width: number;
  @Input() heigth: number;
}
