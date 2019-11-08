import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { ContactsPage } from '../contacts/contacts.page';
import { AgendaPage } from '../agenda/agenda.page';
import { MapPage } from '../map/map.page'

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'contacts',
        component: ContactsPage,
      },
      {
        path: 'calendar',
        component: AgendaPage,
      },
      {
        path: 'map',
        component: MapPage,
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage,ContactsPage,AgendaPage,MapPage]
})
export class HomePageModule {}
