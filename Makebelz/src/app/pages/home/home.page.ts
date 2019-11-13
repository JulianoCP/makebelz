import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/pages/authentication/auth.service';
import { PopoverController, NavController } from '@ionic/angular';
import { CrudService } from 'src/app/services/crud.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { HomeService } from './home.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  // private profileType: string;

  constructor(
    private authService: AuthService,
    public popoverController: PopoverController,
    public navCtrl: NavController,
    public dataService: CrudService,
    public firestore: AngularFirestore,
    public homeService: HomeService,
    public route: Router,
    public activatedRouter: ActivatedRoute
  ) {
    // this.profileType = this.homeService.profile.type;
  }


  ngOnInit() {
  }


  myProfile() {
    if (this.homeService.profile.type === 'client') {
      this.route.navigate(['./cadClient'], {relativeTo: this.activatedRouter });
    }

    if (this.homeService.profile.type === 'professional') {
      this.route.navigate(['./cadProfessional'], {relativeTo: this.activatedRouter });
    }
    console.log('meu perfil');
  }

  newSchedule() {
    console.log('Novo agendamento');
  }

  evaluation() {
    console.log('avaliação');
  }

  schedule() {
    console.log('Agenda');
  }

  setting() {
    console.log('Configuração');
  }


  async logout() {
    try {
      this.homeService.profile = '';
      await this.authService.logout();
    } catch (error) {
      console.log(error);
    } finally {
      console.log("FIM");
    }
  }

  // currentUser()
  // {
  //   console.log(firebase.auth().currentUser);
  // }

}
