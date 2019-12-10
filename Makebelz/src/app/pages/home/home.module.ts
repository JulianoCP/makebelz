import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { ProfileService } from '../authentication/profile/profile.service';
// import { HomeService } from './home.service';
// import { ProfileService } from '../authentication/profile/profile.service';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    resolve: {
      profileService: ProfileService
    }
  },
  {
    path: 'contacts',
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
  },
  {
    path: 'scheduling',
    loadChildren: () => import('../scheduling/scheduling.module').then(m => m.SchedulingPageModule)
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage],
  providers: [ ProfileService ]

})
export class HomePageModule {}
