import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {AdminUserComponent} from './admin-user/admin-user.component';
import {AddComponent} from './add/add.component';
import {ListComponent} from './list/list.component';
import {EditComponent} from './edit/edit.component';
import {MessageComponent} from './message/message.component';
import {ProfileComponent} from './profile/profile.component';

import { AdminGuard } from '../services/adminGuard';


const adminRoutes: Routes = [
  {path: 'adminUser', component: AdminUserComponent, canActivate: [AdminGuard],
    children: [
      {path: 'agregarPropiedad', component: AddComponent},
      {path: 'propiedades', component: ListComponent},
      {path: 'editarPropiedad', component: EditComponent},
      {path: 'mensajes', component: MessageComponent},
      {path: 'perfil', component: ProfileComponent}
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
