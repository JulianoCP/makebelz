import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/interfaces/login';
import * as firebase from 'firebase/app';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/pages/authentication/auth.service';

import 'firebase/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {

  public loginRegister: Login = {};
  private loading: any;
  public tipo: boolean;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
  ) {}

  ngOnInit() {}

  async register() {
    await this.presentLoading();


    try {
      if (this.loginRegister.password !== this.loginRegister.confirmPassword) {
        this.presentToast('Senha incompatível');
        return;
      }
      const a = await this.authService.register(this.loginRegister);
      const id = a.user.uid;
      firebase.auth().currentUser.sendEmailVerification();

    } catch (error) {
      await this.presentToast(this.translate(error.code));
    } finally {
      this.loading.dismiss();
    }
  }


  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Por favor, aguarde...' });
    // duration: 2000
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

  }

  exibirSenha() {
    this.tipo = !this.tipo;
  }
}
