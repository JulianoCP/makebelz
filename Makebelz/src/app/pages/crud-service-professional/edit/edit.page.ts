import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { CrudService } from 'src/app/services/crud.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  private  map = {'pedicure' : false,
                 'manicure' : false, 
                 'pele' : false, 
                 'maquiadora' : false, 
                 'cabeleireira' : false
  }
  
  constructor(
    private crudService: CrudService,
    private firestore: AngularFirestore,
    private authService: AuthService
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


  async ngOnInit() {
    await this.firestore.collection('Servicos').doc(this.authService.getAuth().currentUser.uid).valueChanges().subscribe(
      (res: any) => {
        const{Manicure,Pele,Cabeleireira,Pedicure,Maquiadora } = res
        this.priceServ.manicure = Manicure ? Manicure : 0
        this.serv.manicure = Manicure ? true : false 
        this.map["manicure"] = Manicure ? true : false
        this.priceServ.pedicure = Pedicure ? Pedicure : 0
        this.serv.pedicure = Pedicure ? true : false 
        this.map["pedicure"] = Pedicure ? true : false
        this.priceServ.cabeleireira = Cabeleireira ? Cabeleireira : 0
        this.serv.cabeleireira = Cabeleireira ? true : false 
        this.map["cabeleireira"] = Cabeleireira ? true : false
        this.priceServ.pele = Pele ? Pele : 0
        this.serv.pele = Pele ? true : false 
        this.map["pele"] = Pele ? true : false
        this.priceServ.maquiadora = Maquiadora ? Maquiadora : 0
        this.serv.maquiadora = Maquiadora ? true : false 
        this.map["maquiadora"] = Maquiadora ? true : false
    })
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
          service["Pele"] = this.priceServ.pele
        }
        if ( this.map["maquiadora"] == true ) {
          service["Maquiadora"] = this.priceServ.maquiadora
        }
        if ( this.map["cabeleireira"] == true ) {
          service["Cabeleireira"] = this.priceServ.cabeleireira
        }

        this.crudService.create_Usuario(service, firebase.auth().currentUser.uid,'Servicos').then(resp => {
          });
      }catch(error){
        console.log("Erro!");
        console.log(error);
      }
  }

}
