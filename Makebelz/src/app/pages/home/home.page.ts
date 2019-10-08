import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  private loading: any;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService
  ) { }

  ngOnInit() {}


  async logout() {
    await this.presentLoading();
    try {
      await this.authService.logout();
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
    const toast = await this.toastCtrl.create({ message, duration: 2000, color: 'danger', position: 'bottom'});
    toast.present();
  }


  translate(code: string) {
    let message: string;
    switch (code) {
      case 'auth/email-already-in-use':
        message = 'E-mail já esta sendo usado';
        break;

      case 'auth/invalid-email':
        message = 'E-mail inválido';
        break;

      case 'auth/argument-error':
        message = 'E-mail e senha são obrigatórios';
        break;

      case 'auth/user-not-found':
        message = 'Usuário não cadastrado';
        break;

      case 'auth/wrong-password':
        message = 'Senha errada';
        break;

      default:
        console.error(code);
    }
    return message;
  }
}
