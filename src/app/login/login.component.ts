import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
constructor(private router: Router,) {}
  username: any=document.getElementById('username')
  password: any=document.getElementById('password')


  goHome(){
    // if(this.username.innerHTML=="danon" &&
    //  this.password.innerHTML=="1234")
    //   {
      this.router.navigate(['Home'])
      // }
    }
}
