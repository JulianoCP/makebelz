import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import * as firebase from 'firebase/app';
import { PopoverController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  private loading: any;

  constructor(
    private authService: AuthService,
    public popoverController: PopoverController,
    public navCtrl: NavController
  ) { }

  ngOnInit() {}


  async logout() {
    try {
      await this.authService.logout();
    } catch (error) {
      console.log(error);
    } finally {
      console.log("FIM");
    }
  }

  currentUser()
  {
    console.log(firebase.auth().currentUser);
  }

}
