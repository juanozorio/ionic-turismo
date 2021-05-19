import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  usuario : string;
  senha : number;

  ngOnInit() {
  }

  logar() {
  console.log(this.usuario);
  console.log(this.senha);
  }
}
