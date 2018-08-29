import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';


import { GLOBAL } from '../../services/global';
import { PublicationService } from '../../services/publication.service';
import { UserService } from '../../services/user.service';
import { UploadService } from '../../services/upload.service';
import { Publication } from '../../models/publications';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [UserService, PublicationService, UploadService]
})
export class AddComponent implements OnInit, DoCheck {
  public publications: Publication;
  public identity;
  public token;
  public url: string;
  public status: string;
  public filesToUpload: Array<File>;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _publicationService: PublicationService,
    private _uploadService: UploadService
  ) {
    this.publications = new Publication('', '', '', '', '', '', '', '', '', 0, '', '', 0, 0, 0, 0, '', '', '', '', '', '', '');
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
  }

  ngOnInit() {
  }

  ngDoCheck() {

  }

  onSubmit() {
    this._publicationService.publicationAdd(this.token, this.publications).subscribe(
      response => {
        if (!response.publications) {
          this.status = 'error';

        } else {
          this.status = 'success';
          this.publications = response.publications;

          // subir la imagen del animal
          if (!this.filesToUpload) {
            this._router.navigate(['adminUser/propiedades']);
          } else {
            this._uploadService.makeFileRequest(this.url + 'subir-Imagen-Publicacion/' + this.publications._id,
              [], this.filesToUpload, this.token, 'image').then((result: any) => {
                this.publications.image = result.image;
                this._router.navigate(['adminUser/propiedades']);
              });
          }

        }
      }, error => {
        this.status = 'error';
        console.log(<any>error);
      }
    );
  }

  fileChangeEvent(fileImput: any) {
    this.filesToUpload = <Array<File>>fileImput.target.files;
  }

}
