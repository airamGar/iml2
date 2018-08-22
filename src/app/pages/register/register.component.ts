import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  public user: User;
  public status: string;

  constructor(
    private _route: ActivatedRoute,
    private router: Router,
    private _userService: UserService
  ) {
    this.user = new User (null, null, null, null, null, null, null, 'ROLE_USER', '');
  }

  ngOnInit() {

  }

  onSubmit(registerForm) {
    this._userService.register(this.user).subscribe(
      response => {
        this.status = 'success';
        registerForm.reset();
        this.router.navigate(['login']);
      },
      error => {
        this.status = 'error';
        console.log(<any>error);
      }
    );
  }

  onlogin() {
    this.router.navigate(['login']);
  }

}
