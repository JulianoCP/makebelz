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
    },
  },
  {
    path: 'contacts',
    loadChildren: () => import('../contacts/contacts.module').then(m => m.ContactsPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('../contacts/contacts.module').then(m => m.ContactsPageModule)
  },
  {
    path: 'servicos',
    loadChildren: () => import('../crud-service-professional/view/view.module').then(m => m.ViewPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('../map/map.module').then(m => m.MapPageModule)
  },
    
  {
    path: 'newClient',
    loadChildren: () => import('../client/new/new.module').then(m => m.NewPageModule)
  },
  {
    path: 'newProfessional',
    loadChildren: () => import('../professional/new/new.module').then(m => m.NewPageModule)
  },
  {
    path: 'crudServiceProfessional',
    loadChildren: () => import('../crud-service-professional/crud-service-professional.module').then(m => m.CrudServiceProfessionalPageModule)
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
