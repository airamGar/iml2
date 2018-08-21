import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import {AdminUserComponent} from './admin-user/admin-user.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { MessageComponent } from './message/message.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    AdminUserComponent,
    AddComponent,
    ListComponent,
    EditComponent,
    MessageComponent,
    ProfileComponent

  ],
  imports: [
    BrowserModule,
    AdminRoutingModule,
    HttpModule,
    CommonModule
  ],
  providers: [],
})
export class AdminModule { }
