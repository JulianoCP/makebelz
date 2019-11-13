import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { HomeService } from './home.service';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    resolve: {
      data: HomeService
    }
  },
  {
    path: 'contacts',
    loadChildren: () => import('../contacts/contacts.module').then(m => m.ContactsPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('../agenda/agenda.module').then(m => m.AgendaPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('../map/map.module').then(m => m.MapPageModule)
  },
  {
    path: 'cadClient',
    loadChildren: () => import('../cadClient/cadClient.module').then(m => m.CadClientePageModule)
  },
  {
    path: 'cadProfessional',
    loadChildren: () => import('../cadProfessional/cadProfessional.module').then(m => m.CadManicurePageModule)
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
