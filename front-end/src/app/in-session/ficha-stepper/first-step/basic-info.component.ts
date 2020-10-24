import { Component } from '@angular/core';

@Component({
  selector: 'basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent {

  race = undefined
  races = [
    {id: 1, name: 'Humano(a)'},
    {id: 2, name: 'Elfo(a)'},
    {id: 3, name: 'Anão(a)'},
  ]
  classesInfo = [
    {name: 'Arcanista', id: 'arcanista', url: 'assets/images/1.jpeg'},
    {name: 'Guerreiro', id: 'guerreiro', url: 'assets/images/2.jpeg'},
    {name: 'Bárbaro', id: 'barbaro', url: 'assets/images/3.jpeg'},
    {name: 'Bardo', id: 'bardo', url: 'assets/images/4.jpeg'},
    {name: 'Druída', id: 'druida', url: 'assets/images/5.jpeg'},
  ]

  constructor() { }

}