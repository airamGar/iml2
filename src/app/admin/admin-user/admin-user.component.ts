import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService} from '../../services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css'],
  providers: []
})
export class AdminUserComponent implements OnInit, DoCheck {

  constructor(
  ) { }

  ngOnInit () {

  }
  ngDoCheck () {

  }

}
