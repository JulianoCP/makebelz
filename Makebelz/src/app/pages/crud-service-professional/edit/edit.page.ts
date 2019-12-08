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

  public  map = {
    pedicure : false,
    manicure : false,
    estetica : false,
    maquiagem : false,
    cabelo : false
  };


  public serv = {
    pedicure: false,
    manicure: false,
    estetica: false,
    maquiagem: false,
    cabelo: false,
  };

  public priceServ = {
    pedicure: Number(0),
    manicure: Number(0),
    estetica: Number(0),
    maquiagem: Number(0),
    cabelo : Number(0),
  };


  constructor(
    private crudService: CrudService,
    private firestore: AngularFirestore,
    private authService: AuthService
  ) {}


  async ngOnInit() {
    await this.firestore.collection('Servicos').doc(this.authService.getAuth().currentUser.uid).valueChanges().subscribe(
      (res: any) => {
        const{Manicure, Estetica, Cabelo, Pedicure, Maquiagem } = res;

        // dados manicure
        this.priceServ.manicure = Manicure ? Manicure : 0;
        this.serv.manicure = Manicure ? true : false;
        this.map.manicure = Manicure ? true : false;

        // dados pedicure
        this.priceServ.pedicure = Pedicure ? Pedicure : 0;
        this.serv.pedicure = Pedicure ? true : false;
        this.map.pedicure = Pedicure ? true : false;

        // dados cabeleireira
        this.priceServ.cabelo = Cabelo ? Cabelo : 0;
        this.serv.cabelo = Cabelo ? true : false;
        this.map.cabelo = Cabelo ? true : false;

        // dados estetica
        this.priceServ.estetica = Estetica ? Estetica : 0;
        this.serv.estetica = Estetica ? true : false;
        this.map.estetica = Estetica ? true : false;

        // dados maquiagem
        this.priceServ.maquiagem = Maquiagem ? Maquiagem : 0;
        this.serv.maquiagem = Maquiagem ? true : false;
        this.map.maquiagem = Maquiagem ? true : false;
    });
  }

  isToggle(value) {
    console.log(value);
    this.map[value] = !this.map[value];
  }


  cadServices() {
    const service = {
      Maquiagem : Number(0),
      Pedicure : Number(0),
      Manicure : Number(0),
      Estetica : Number(0),
      Cabelo : Number(0)
    };

    try {
      this.map.maquiagem === true ? service.Maquiagem = this.priceServ.maquiagem : Number(0);
      this.map.pedicure === true ? service.Pedicure = this.priceServ.pedicure : Number(0);
      this.map.estetica === true ? service.Estetica = this.priceServ.estetica : Number(0);
      this.map.manicure === true ? service.Manicure = this.priceServ.manicure : Number(0);
      this.map.cabelo === true ? service.Cabelo = this.priceServ.cabelo : Number(0);

      this.crudService.create(service, firebase.auth().currentUser.uid, 'Servicos').then(resp => {
        });
    } catch (error) {
      console.log('Erro!');
      console.log(error);
    }
  }

}
