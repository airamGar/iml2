import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class UserService {
    public url: string;
    public identity;
    public token;

    constructor(private _http: Http) {
        this.url = GLOBAL.url;
    }

    register(user_to_register) {
        let params = JSON.stringify(user_to_register);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'registroUsuario', params, { headers: headers }).pipe(map(res => res.json()));
    }

    singUp(user_to_login, gettoken = null) {
        if (gettoken != null) {
            user_to_login.gettoken = gettoken;
        }

        let params = JSON.stringify(user_to_login);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'loginUser', params, { headers: headers }).pipe(map(res => res.json()));
    }

    getIdentity() {
        let identity = JSON.parse(localStorage.getItem('identity'));

        if (identity !== 'undefined') {
            this.identity = identity;
        } else {
            this.identity = null;
        }
        return this.identity;

    }

    getToken() {
        let token = localStorage.getItem('token');

        if (token !== 'undefined') {
            this.token = token;
        } else {
            this.token = null;
        }
        return this.token;
    }
    logout() {
        localStorage.removeItem('identity');
        localStorage.removeItem('token');
    }

    updateUser(user_to_update) {
        let params = JSON.stringify(user_to_update);
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.getToken()
        });
        return this._http.put(this.url + 'actualizarUsuario/' + user_to_update._id, params, { headers: headers })
                                .pipe(map(res => res.json()));
    }
}


