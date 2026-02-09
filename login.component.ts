import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) { }
  userobj!: User;
  ngOnInit() {
    this.userobj = new User();
  }
  save() {
    console.log('Username' + this.userobj.username);
    console.log('Password' + this.userobj.password);
    if(this.userobj.username=="admin" && this.userobj.password=="admin"){
      this.router.navigate(['/retrieve']);
    }
  }
}
