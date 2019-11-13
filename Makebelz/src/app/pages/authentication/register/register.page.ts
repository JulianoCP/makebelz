import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/interfaces/login';
import * as firebase from 'firebase/app';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/pages/authentication/auth.service';
import { RegisterService } from './register.service';
import { FirebaseDatabase, FirebaseApp } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {


  public loginRegister: Login = {};
  private loading: any;
  public tipo: boolean;

  private profile: {};


  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    public navCtrl: NavController,
    public registerService: RegisterService,
    public route: Router,
    public activetedRoute: ActivatedRoute,
    private crudService: CrudService,

  ) {
    this.profile = {
      type: localStorage.getItem('profile')
    };
    localStorage.removeItem('profile');
  }



  ngOnInit() {}


  async register() {

    await this.presentLoading();

    try {
      // ***** comenta caso não queira usar a api de validação de e-mail
      // const data = await this.registerService.verifyEmail(this.loginRegister.email);
      // const format = data[`format_valid`];
      // const smtpCheck = data[`smtp_check`];

      // if (!format) {
      //   this.presentToast('Formato de e-mail inválido!');
      //   return false;
      // }


      // if (!smtpCheck) {
      //   this.presentToast('E-mail inválido!');
      //   return false;
      // }
      /// até aqui

      if (this.loginRegister.password !== this.loginRegister.confirmPassword) {
        this.presentToast('Senha incompatível');
        return false;
      }

      try {
        // método que cria o usuáro e insere o tipo de perfil no banco.
        await this.authService.register(this.loginRegister).then(res => {
          this.crudService.create_Usuario(this.profile , firebase.auth().currentUser.uid, 'Profile').then(resp => {
            console.log('dado inserido com sucesso');
          }).catch (error => {
            console.log('dado não inserido!!', error);
          });

        }).catch(error => {
          console.log('Erro ao criar usuário', error);
        });
      } catch (error) {
        await this.presentToast(this.translate(error.code));
      }

    } finally {
      this.loading.dismiss();
    }
  }


  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Por favor, aguarde...' });
    // duration: 3000
    return this.loading.present();
  }


  async presentToast(message: string) {
    // como a propriedade tem o mesmo nome do qual ta no parâmetro, não tem problema de deixar só o nome (sintaxi curta)
    const toast = await this.toastCtrl.create({ message, duration: 3000, color: 'danger', position: 'bottom'});
    toast.present();
  }


  translate(code: string) {
    console.log(code);
    let message: string;
    switch (code) {
      case 'auth/email-already-in-use':
        message = 'E-mail já esta sendo usado!';
        break;

      case 'auth/invalid-email':
        message = 'E-mail inválido!';
        break;

      case 'auth/argument-error':
        message = 'E-mail e senha são obrigatórios!';
        break;

      case 'auth/weak-password':
        message = 'Senha fraca, insira uma senha com no mínimo 6 dígitos';
        break;

      // default:
        // console.error(code);
    }
    return message;
  }

  cancel() {

    this.route.navigate(['login']);
    this.navCtrl.setDirection('back');
    localStorage.clear();
  }

  exibirSenha() {
    this.tipo = !this.tipo;
  }
}
