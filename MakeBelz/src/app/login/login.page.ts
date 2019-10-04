import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  private lg = {
      username : "",
      password : ""
  }

  ngOnInit() {
  }
  
  login()
  {
    console.log(this.lg);
    this.lg.username = "";
    this.lg.password = "";
  }

}
