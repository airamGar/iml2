import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../../services/global';
import { PublicationService } from '../../services/publication.service';
import { UserService } from '../../services/user.service';
import { UploadService } from '../../services/upload.service';
import { Publication } from '../../models/publications';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [PublicationService]
})
export class ListComponent implements OnInit {

  public publications: Publication[];
  public url: string;

  constructor(
    private _router: Router,
    private _publicationService: PublicationService,

  ) {
    this.url = GLOBAL.url;
   }

  ngOnInit() {
    this._publicationService.getPublications().subscribe(
      response => {
        if (!response.publications) {

        } else {
          this.publications = response.publications;
          console.log(this.publications);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
