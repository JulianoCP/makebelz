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
    localStorage.setItem('profile', 'professional');
    this.route.navigate(['register'], { relativeTo: this.activatedRoute });
  }


  client() {
    localStorage.setItem('profile', 'client');
    this.route.navigate(['register'], { relativeTo: this.activatedRoute });
  }
}
