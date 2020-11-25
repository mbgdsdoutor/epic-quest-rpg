import { Component, Input } from '@angular/core';
import { Player } from 'src/app/shared/models/player';
import { fullClassesMock, fullRacesMock } from 'src/app/utils/mocks';

@Component({
  selector: 'basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent {

  @Input() ficha: Player;

  races = fullRacesMock;
  classes = fullClassesMock;
  classesInfo = [
    { name: 'Arcanista', id: 'arcanista', url: 'assets/images/1.jpeg' },
    { name: 'Guerreiro', id: 'guerreiro', url: 'assets/images/2.jpeg' },
    { name: 'Bárbaro', id: 'barbaro', url: 'assets/images/3.jpeg' },
    { name: 'Bardo', id: 'bardo', url: 'assets/images/4.jpeg' },
    { name: 'Druída', id: 'druida', url: 'assets/images/5.jpeg' },
  ];
  idadesAlert: string[] = [
    'Maduro: For –1, Des –1, Con –1, Int +1, Sab +1, Car +1.',
    'Velho: For –2, Des –2, Con –2, Int +1, Sab +1, Car +1.',
    'Ancião: For –3, Des –3, Con –3, Int +1, Sab +1, Car +1.'
  ]

  constructor() { }

}