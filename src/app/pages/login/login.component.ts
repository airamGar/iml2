import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { UserLogin } from '../../models/userLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userLogin: UserLogin;

  constructor(
    public router: Router
  ) {
    this.userLogin = new UserLogin ('', '');
  }

  ngOnInit() {
  }

  onSubmitLogin() {
    console.log(this.userLogin);
  }

  onNewUser() {
    this.router.navigate(['/register']);
  }

}
