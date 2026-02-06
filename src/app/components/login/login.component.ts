import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIService } from '../../services/apiservice';
import { CommonModule } from '@angular/common';
import { MessageService } from '../../services/messageservice';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule], 
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

    constructor(private api : APIService,
      private message : MessageService) {}
    user : any = {
      username: '',
      password: ''
    }
    rememberMe: boolean = false;

    login() {
      this.api.login('users', this.user).then(res => {
        if (res.status == 500) {
          this.message.show('danger', 'Hiba', res.message!);
          return
        }
  
        this.message.show('success', 'Siker', res.message!);
      })
    }
} 

