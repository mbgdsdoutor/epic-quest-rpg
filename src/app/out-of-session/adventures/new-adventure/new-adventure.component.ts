import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-new-adventure',
  templateUrl: './new-adventure.component.html',
  styleUrls: ['./new-adventure.component.scss']
})

export class NewAdventureComponent implements OnInit {

  public form: FormGroup;
  players: string[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.configurarForm();
  }

  configurarForm() {
    const name = this.formBuilder.control(null, [Validators.required]);
    const description = this.formBuilder.control(null, [Validators.required]);
    const date = this.formBuilder.control(null, [Validators.required]);
    this.form = this.formBuilder.group({
      name,
      description,
      date
    });
  }
}
