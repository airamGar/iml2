import { Component, OnInit, DoCheck } from '@angular/core';
import {UserService} from '../../services/user.service';
import { Router, ActivatedRoute, Params } from '../../../../node_modules/@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [UserService]
})
export class NavbarComponent implements OnInit, DoCheck {
  public identity;
  public _logoutNav;
  public status: string;

  constructor(
    private _userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.identity = this._userService.getIdentity();
  }

  ngDoCheck () {
    this.identity = this._userService.getIdentity();
    if (this.identity) {
      this.status = 'ingreso';
      console.log(this.status);
    } else {
      this.status = 'salir';
      console.log(this.status);
    }
  }

  logout() {
    this._logoutNav = this._userService.logout();
    this.router.navigate(['/']);
    this.status = 'salir';
      console.log(this.status);
  }

}
