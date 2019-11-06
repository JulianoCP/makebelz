import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cliente()
  {
    console.log("CLIENTE SEILA");
  }

}
