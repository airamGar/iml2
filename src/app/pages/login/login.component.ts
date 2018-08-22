import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '../../../../node_modules/@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit, DoCheck {
  public user: User;
  public identity;
  public token;
  public status: string;

  constructor(
    private router: Router,
    private _userService: UserService
  ) {
    this.user = new User(null, null, null, null, null, null, null, 'ROLE_USER', '');
  }

  ngOnInit() {

  }

  onSubmitLogin() {
    this._userService.singUp(this.user).subscribe(
      response => {
        this.identity = response.user;
        if (!this.identity || !this.identity._id) {
          alert('El usuario no se ha logeado correctamente');
        } else {
          // this.identity.password = '';
          localStorage.setItem('identity', JSON.stringify(this.identity));
          this._userService.singUp(this.user, 'true').subscribe(
            response => {
              this.token = response.token;
              if (this.token.length <= 0) {
                alert('El el token no se ha generado');
              } else {
                localStorage.setItem('token', this.token);
              }

            }, error => {

              console.log(<any>error);
            }
          );
        }
        this.router.navigate(['/adminUser']);
      }, error => {
        this.status = 'error';
        console.log(<any>error);
      }
    );
  }

  onNewUser() {
    this.router.navigate(['/register']);
  }

  ngDoCheck() {

  }

}
