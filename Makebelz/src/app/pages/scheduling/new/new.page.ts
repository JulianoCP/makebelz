import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {


  public week = {
    segunda: false,
    terca: false,
    quarta: false,
    quinta: false,
    sexta: false,
    sabado: false,
    domingo: false
  };

  constructor() { }

  ngOnInit() {
  }

  isCheck(mensagem) {
    console.log(mensagem);
    return true;
  }

  confirm() {
    console.log(this.week);
  }

}
