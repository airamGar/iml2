import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '../../../../node_modules/@angular/router';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [UserService, UploadService]
})
export class ProfileComponent implements OnInit {
  public user: User;
  public status: string;
  public identity;
  public token;
  public url: string;
  public filesToUpload: Array<File>;

  constructor(
    private router: Router,
    private _userService: UserService,
    private _uploadService: UploadService
  ) {

    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.user = this.identity;
    this.url = GLOBAL.url;

  }

  ngOnInit() {
  }

  onSubmit(miPerfilForm) {
    this._userService.updateUser(this.user).subscribe(
      response => {
        this.status = 'success';
        localStorage.setItem('identity', JSON.stringify(this.user));

        // subir imagen
        this._uploadService.makeFileRequest(this.url + 'cargarImagenUsuario/' + this.user._id,
          [], this.filesToUpload, this.token, 'image').then((result: any) => {
            this.user.image = result.image;
            localStorage.setItem('identity', JSON.stringify(this.user));
          });
      },
      error => {
        this.status = 'error';
        console.log(<any>error);
      }
    );
  }

  fileChangeEvent(fileImput: any) {
    this.filesToUpload = <Array<File>>fileImput.target.files;
  }
}
