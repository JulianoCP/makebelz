import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';
import { LoginGuard } from './guards/login/login.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/authentication/login/login.module#LoginPageModule', canActivate: [LoginGuard] },
  // { path: 'register', loadChildren: './pages/authentication/register/register.module#RegisterPageModule', canActivate: [LoginGuard]},
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule', canActivate: [AuthGuard] },
  // { path: 'cad-cliente', loadChildren: './pages/cad-cliente/cad-cliente.module#CadClientePageModule'},
  // { path: 'cad-manicure', loadChildren: './pages/cad-manicure/cad-manicure.module#CadManicurePageModule' },
  { path: 'contacts', loadChildren: './pages/contacts/contacts.module#ContactsPageModule' },
  { path: 'agenda', loadChildren: './pages/agenda/agenda.module#AgendaPageModule' },
  { path: 'map', loadChildren: './pages/map/map.module#MapPageModule' },
  { path: 'profile', loadChildren: './pages/authentication/profile/profile.module#ProfilePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
