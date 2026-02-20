import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIService } from '../../services/apiservice';
import { CommonModule } from '@angular/common';
import { MessageService } from '../../services/messageservice';
import { AuthService } from '../../services/authservice';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule], 
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

    constructor(private api : APIService,
      private message : MessageService,
    private auth : AuthService,
  private router: Router) {}
    user : any = {
      username: '',
      password: ''
    }
    rememberMe: boolean = false;

    login() {
      this.api.login(this.user.username, this.user.password).then(res => {
        if (res.status == 500) {
          this.message.show('danger', 'Hiba', res.message!);
          return
        }
  
        this.message.show('success', 'Siker', "Sikeresen bejelentkeztél!");
        this.auth.login(JSON.stringify(this.user));
        this.router.navigate(['/main']);
      })
    }
} 

