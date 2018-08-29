import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../../services/global';
import { PublicationService } from '../../services/publication.service';
import { Publication } from '../../models/publications';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [PublicationService]
})
export class DetailComponent implements OnInit {

  public publications: Publication;
  public url: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _publicationService: PublicationService,
  ) {
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    this.getPublication();
  }
  getPublication () {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._publicationService.getPublication(id).subscribe(
        response => {
          if (!response.publications) {
            this._router.navigate(['/']);
          } else {
            this.publications = response.publications;
          }
        },
        error => {
          console.log(<any>error);
        }
      );
    });
  }
}
