import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  userString;
  constructor(private router:Router, private service:UserService) { }

  ngOnInit() {
    this.service.getUserString().subscribe(
      res=>{
        this.userString = res;
      },
      err=>{
        console.log(err);
      }
    );
  }

  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }

}
