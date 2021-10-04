import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AuthRoutingModule } from './auth/auth.routing';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';
import { PagesRoutingModule } from './pages/pages.routing';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/dashboard', pathMatch: 'full'
  },
  {
    path: '**',
    component: NotpagefoundComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }