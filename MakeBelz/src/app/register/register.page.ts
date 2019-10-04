import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor() { }

  private re = {
    name : "",
    password : "",
    email: "",
    end: "",
    phone: ""
  }

  ngOnInit() {
  }

  register()
  {
    console.log(this.re);
    this.re.name = "";
    this.re.password = "";
    this.re.email = "";
    this.re.end = "";
    this.re.phone = "";
  }

}
