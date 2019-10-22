import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadClientePage } from './cad-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: CadClientePage
  },
  {
    path: 'home',
    loadChildren: () =>
      import("../home/home.module").then(m => m.HomePageModule)
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadClientePage]
})
export class CadClientePageModule {}
