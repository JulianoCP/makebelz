import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/interfaces/login';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/pages/authentication/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public userLogin: Login = {};
  private loading: any;
  public tipo: boolean;


  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private navCtrl: NavController,
    private router: Router,
    public activatedRoute: ActivatedRoute,

  ) { }

  ngOnInit() {}

  async login() {
    await this.presentLoading();
    console.log(this.userLogin);
    try {
      await this.authService.login(this.userLogin);
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
    // como a propriedade tem o mesmo nome do qual ta no parâmetro, não tem problema de deixar só o nome (sintaxe curta)
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

  exibirSenha() {
    this.tipo = !this.tipo;
  }

  newAccount() {
    this.router.navigate(['./profile'], {relativeTo: this.activatedRoute});
    this.navCtrl.setDirection('forward');
  }
}
