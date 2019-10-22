import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/interfaces/login';
import * as firebase from 'firebase/app';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-cad-cliente',
  templateUrl: './cad-cliente.page.html',
  styleUrls: ['./cad-cliente.page.scss'],
})
export class CadClientePage implements OnInit {

  private loading: any;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private crudService: CrudService
  ) {}

  private re = {
    name: '',
    end_bairro: '',
    end_cidade: '',
    end_numero: '',
    end_rua: '',
    phone: '',
  };

  ngOnInit() {}

  async register(id) {
    try {
      
      let usuario = {};

      usuario['Name'] = this.re.name;
      usuario['Bairro'] = this.re.end_bairro;
      usuario['Cidade'] = this.re.end_cidade;
      usuario['Numero'] = this.re.end_rua;
      usuario['Rua'] = this.re.end_numero;
      usuario['Phone'] = this.re.phone;

      this.crudService.create_NewStudent(usuario,id).then(resp => {
      console.log(usuario);
      })

    } catch (error) {
      console.log("DEU RUIM");
    } finally {
      this.loading.dismiss();
    }
  }

}
