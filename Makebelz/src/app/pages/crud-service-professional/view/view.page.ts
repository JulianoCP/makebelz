import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../../authentication/auth.service';
import { async } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  public manicure = 0;
  public pedicure = 0;
  public cabelo = 0;
  public estetica = 0;
  public maquiagem = 0;

  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService
  ) { }

  async ngOnInit() {
    await this.firestore.collection('Servicos').doc(this.authService.getAuth().currentUser.uid).valueChanges().subscribe(
      (res: any) => {
        const{Manicure, Estetica, Cabelo, Pedicure, Maquiagem } = res;
        this.maquiagem = Maquiagem ? Maquiagem : 0;
        this.manicure = Manicure ? Manicure : 0;
        this.pedicure = Pedicure ? Pedicure : 0;
        this.estetica = Estetica ? Estetica : 0;
        this.cabelo = Cabelo ? Cabelo : 0;
        console.log(res);
    });
  }

}
