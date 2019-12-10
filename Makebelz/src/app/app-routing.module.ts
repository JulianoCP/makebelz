import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';
import { LoginGuard } from './guards/login/login.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/authentication/login/login.module#LoginPageModule', canActivate: [LoginGuard] },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule', canActivate: [AuthGuard] },
  // { path: 'crud-service-professional', loadChildren: './pages/crud-service-professional/crud-service-professional.module#CrudServiceProfessionalPageModule' },
  // { path: 'new', loadChildren: './pages/crud-service-professional/new/new.module#NewPageModule' },
  // { path: 'edit', loadChildren: './pages/crud-service-professional/edit/edit.module#EditPageModule' },
  // { path: 'delete', loadChildren: './pages/crud-service-professional/delete/delete.module#DeletePageModule' },
  // { path: 'view', loadChildren: './pages/crud-service-professional/view/view.module#ViewPageModule' },
  // { path: 'new', loadChildren: './pages/crud-service-professional/new/new.module#NewPageModule' },
  // { path: 'services-provided', loadChildren: './pages/services-provided/services-provided.module#ServicesProvidedPageModule' },
  // { path: 'services-type', loadChildren: './pages/services-type/services-type.module#ServicesTypePageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
