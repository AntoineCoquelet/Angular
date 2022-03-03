import { Component, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  user!: User;
  gender: string[] = [];

  ngOnInit() {

    this.gender =  ['Male', 'Female', 'Others'];
    this.user = new User({
        email:"", password: { pwd: "" , confirm_pwd: ""},
        gender: this.gender[0], terms: false});
  }

  public onFormSubmit({ value}: { value: User }) {
    this.user = value;
    console.log( this.user);
  }
}
