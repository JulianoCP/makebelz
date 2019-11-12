import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    public route: Router,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  professional() {
    console.log('profissional');
    localStorage.setItem('profile', 'professional');
    this.route.navigate(['register'], { relativeTo: this.activatedRoute });
  }


  client() {
    console.log('cliente');
    localStorage.setItem('profile', 'client');
    this.route.navigate(['register'], { relativeTo: this.activatedRoute });
  }
}
