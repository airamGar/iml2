import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user: User;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.user = new User (null, null, null, null, null, null, null, 'ROLE_USER', '');
  }

  ngOnInit() {
    console.log(this.user.name, this.user.surname, this.user.contact);
  }
  onSubmit() {
    console.log(this.user);
  }

}
