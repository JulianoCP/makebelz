import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule', canActivate: [LoginGuard] },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule', canActivate: [AuthGuard] },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule',canActivate: [LoginGuard]},
  { path: 'router', loadChildren: './pages/router/router.module#RouterPageModule' },
  { path: 'cad-cliente', loadChildren: './pages/cad-cliente/cad-cliente.module#CadClientePageModule' },
  { path: 'cad-manicure', loadChildren: './pages/cad-manicure/cad-manicure.module#CadManicurePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
