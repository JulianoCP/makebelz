import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../../authentication/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  private readonly _profile = new BehaviorSubject<any>([]);
  readonly profile$ = this._profile.asObservable();

  public manicure = 0
  public pedicure = 0
  public cabeleireira = 0
  public pele = 0
  public maquiadora = 0

  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService
  ) { }

  async ngOnInit() {
    await this.firestore.collection('Servicos').doc(this.authService.getAuth().currentUser.uid).valueChanges().subscribe(
      (res: any) => {
        const{Manicure,Pele,Cabeleireira,Pedicure,Maquiadora } = res
        this.manicure = Manicure ? Manicure : 0
        this.pedicure = Pedicure ? Pedicure : 0
        this.cabeleireira = Cabeleireira ? Cabeleireira : 0
        this.pele = Pele ? Pele : 0
        this.maquiadora = Maquiadora ? Maquiadora : 0 
    })
  }

}
