import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/pages/authentication/auth.service';
import { PopoverController, NavController } from '@ionic/angular';
import { CrudService } from 'src/app/services/crud.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { HomeService } from './home.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from '../authentication/profile/profile.service';

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
    // public homeService: HomeService,
    public route: Router,
    public activatedRouter: ActivatedRoute,
    public profileService: ProfileService
  ) {}


  ngOnInit() {
  }

  isClient() {
    return this.profileService.profile.type === 'client';
  }

  isProfessional() {
    return this.profileService.profile.type === 'professional';
  }

  myProfile() {
    if (this.profileService.profile.type === 'client') {
      this.route.navigate(['./newClient'], {relativeTo: this.activatedRouter });
    }

    if (this.profileService.profile.type === 'professional') {
      this.route.navigate(['./newProfessional'], { relativeTo: this.activatedRouter });
    }
    console.log('meu perfil');
  }

  newSchedule() {
    this.route.navigate(['./newScheduling'], { relativeTo: this.activatedRouter });
  }

  evaluation() {
    console.log('avaliação');
  }

  serviceProvided() {
    this.route.navigate(['./crudServiceProfessional'], { relativeTo: this.activatedRouter });
  }




  horarios() {
    this.route.navigate(['./scheduling'], { relativeTo: this.activatedRouter });
  }

  setting() {
    console.log('Configuração');
  }

  contacts() {
    this.route.navigate(['./contacts'], { relativeTo: this.activatedRouter });
  }

  agenda(){
    this.route.navigate(['./calendar'], { relativeTo: this.activatedRouter });
  }

  calendar() {
    this.route.navigate(['./calendar'], { relativeTo: this.activatedRouter });
  }
  servicos() {
    this.route.navigate(['./servicos'], { relativeTo: this.activatedRouter });
  }

  map() {
    this.route.navigate(['./map'], { relativeTo: this.activatedRouter });
  }

  async logout() {
    try {
      this.profileService.profile = '';
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
