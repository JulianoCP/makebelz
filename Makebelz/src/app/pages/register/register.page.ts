import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/interfaces/login';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {

  public loginRegister: Login = {};
  private loading: any;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService
  ) {}

  private re = {
    name: '',
    end: '',
    phone: '',
    type: ''
  };

  ngOnInit() {}

  segmentChanged(event) {
    const valorSegmet = event.detail.value;
    this.re.type = valorSegmet;
  }


  async register() {
    await this.presentLoading();
    try {
      await this.authService.register(this.loginRegister);
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
        message = 'E-mail já esta sendo usado!';
        break;

      case 'auth/invalid-email':
        message = 'E-mail inválido!';
        break;

      case 'auth/argument-error':
        message = 'E-mail e senha são obrigatórios!';
        break;

      case 'auth/weak-password':
        message = 'Senha fraca, insira uma senha com no mínimo 6 caractéres';
        break;

      default:
        console.error(code);
    }
    return message;
  }
}
