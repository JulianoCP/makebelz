import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ServicesProvidedPage } from './services-provided.page';

const routes: Routes = [
  {
    path: '',
    component: ServicesProvidedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ServicesProvidedPage]
})
export class ServicesProvidedPageModule {}
