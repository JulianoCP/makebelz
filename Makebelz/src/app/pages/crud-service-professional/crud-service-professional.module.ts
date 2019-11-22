import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CrudServiceProfessionalPage } from './crud-service-professional.page';

const routes: Routes = [
  {
    path: '',
    component: CrudServiceProfessionalPage
  },
  {
    path: 'editServicos',
    loadChildren: () => import('../crud-service-professional/edit/edit.module').then(m => m.EditPageModule)
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CrudServiceProfessionalPage]
})
export class CrudServiceProfessionalPageModule {}
