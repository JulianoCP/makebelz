import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { EditPage } from "./edit.page";

const routes: Routes = [
  {
    path: "",
    component: EditPage
  },
  {
    path: "serviceProfessional",
    loadChildren: () =>
      import(
        "../../crud-service-professional/crud-service-professional.module"
      ).then(m => m.CrudServiceProfessionalPageModule)
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditPage]
})
export class EditPageModule {}
