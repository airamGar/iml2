import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {NoFoundComponent} from './pages/no-found/no-found.component';
import { DetailComponent } from './pages/detail/detail.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'detallePropiedad/:id', component: DetailComponent},
  {path: '**', component: NoFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
