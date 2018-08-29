import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class PublicationService {
    public url: string;
    public identity;
    public token;

    constructor(private _http: Http) {
        this.url = GLOBAL.url;
    }

    publicationAdd (token, publication) {
        let params = JSON.stringify(publication);
        let headers = new Headers ({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.post(this.url + 'guardarPublicacion', params, {headers: headers}).pipe(map(res => res.json()));
    }

    getPublications () {
        // let headers = new Headers ({
        //     'Content-Type': 'application/json'});
        // let options = new RequestOptions({headers: headers});
        return this._http.get(this.url + 'publicaciones').pipe(map(res => res.json()));
    }
    getPublication (id) {
        // let headers = new Headers ({
        //     'Content-Type': 'application/json'});
        // let options = new RequestOptions({headers: headers});
        return this._http.get(this.url + 'publicacion/' + id).pipe(map(res => res.json()));
    }
}
