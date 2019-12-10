import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../services/crud.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})

export class NewPage implements OnInit {


  private  map = {'pedicure' : false,
                 'manicure' : false, 
                 'pele' : false, 
                 'maquiadora' : false, 
                 'cabeleireira' : false
  }
  
  constructor(
    private crudService: CrudService,
  ) {

  }
  
  private serv = {
    pedicure: false,
    manicure: false,
    pele: false,
    maquiadora: false,
    cabeleireira: false,
  };

  private priceServ = {
    pedicure: 0,
    manicure: 0,
    pele: 0,
    maquiadora: 0,
    cabeleireira : 0,
  };

  ngOnInit() {
  }

  isToggle(value)
  {
    this.map[value] = !this.map[value];
  }

  cadServices()
  {
    let service = {};

    try {

        if ( this.map["pedicure"] == true ) {
          service["Pedicure"] = this.priceServ.pedicure
        }
        if ( this.map["manicure"] == true ) {
          service["Manicure"] = this.priceServ.manicure
        }
        if ( this.map["pele"] == true ) {
          service["Limpeza de pele"] = this.priceServ.pele
        }
        if ( this.map["maquiadora"] == true ) {
          service["Maquiadora"] = this.priceServ.maquiadora
        }
        if ( this.map["cabeleireira"] == true ) {
          service["Cabeleireira"] = this.priceServ.cabeleireira
        }

        this.crudService.create(service, firebase.auth().currentUser.uid,'Servicos').then(resp => {
          console.log(service);
          });
      }catch(error){
        console.log("Erro!");
        console.log(error);
      }
  }

}
