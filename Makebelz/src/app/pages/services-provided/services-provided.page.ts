import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-provided',
  templateUrl: './services-provided.page.html',
  styleUrls: ['./services-provided.page.scss'],
})
export class ServicesProvidedPage implements OnInit {

  
  private pedicure = false
  private manicure = false
  private pele = false
  private maquiadora = false
  private cabeleireira = false

  private  map = {'pedicure' : this.pedicure,
                 'manicure' : this.manicure, 
                 'pele' : this.pele, 
                 'maquiadora' : this.maquiadora, 
                 'cabeleireira' : this.cabeleireira
  }
  
  constructor() {

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

        console.log(service)
      }catch(error){
        console.log("Erro!");
        console.log(error);
      }
  }

}
