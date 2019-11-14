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

  constructor(
    private authService: AuthService,
    public popoverController: PopoverController,
    public navCtrl: NavController,
    public dataService: CrudService,
    public firestore: AngularFirestore,
    public homeService: HomeService,
    public route: Router,
    public activatedRouter: ActivatedRoute
  ) {}


  ngOnInit() {
  }

  isClient() {
    return this.homeService.profile.type === 'client';
  }

  isProfessional() {
    return this.homeService.profile.type === 'professional';
  }


  myProfile() {
    if (this.homeService.profile.type === 'client') {
      this.route.navigate(['./newClient'], {relativeTo: this.activatedRouter });
    }

    if (this.homeService.profile.type === 'professional') {
      this.route.navigate(['./newProfessional'], { relativeTo: this.activatedRouter });
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

  contacts() {
    this.route.navigate(['./contacts'], { relativeTo: this.activatedRouter });
  }

  calendar() {
    this.route.navigate(['./calendar'], { relativeTo: this.activatedRouter });
  }

  map() {
    this.route.navigate(['./map'], { relativeTo: this.activatedRouter });
  }

  async logout() {
    try {
      this.homeService.profile = '';
      await this.authService.logout();
    } catch (error) {
      console.log(error);
    } finally {
      console.log('FIM');
    }
  }

  // currentUser()
  // {
  //   console.log(firebase.auth().currentUser);
  // }

}
