import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '../../../../node_modules/@angular/router';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [UserService]
})
export class ProfileComponent implements OnInit {
  public user: User;
  public status: string;
  public identity;
  public token;
  constructor(
    private router: Router,
    private _userService: UserService
  ) {

    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.user = this.identity;

  }

  ngOnInit() {
  }

  onSubmit(miPerfilForm) {
    this._userService.updateUser(this.user).subscribe(
      response => {
        this.status = 'success';
        localStorage.setItem('identity', JSON.stringify(this.user));

        // subir imagen
      },
      error => {
        this.status = 'error';
        console.log(<any>error);
      }
    );
  }
}
