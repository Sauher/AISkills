import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tokenauth',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './tokenauth.component.html',
  styleUrl: './tokenauth.component.scss'
})
export class TokenauthComponent implements OnInit {
  token: string = '';
  constructor(private router:Router) {}
  ai:string = ""

  ngOnInit():void{
    const url = window.location.href;
    const parts = url.split('/');
    this.ai = parts[parts.length - 1];
    console.log(this.ai);
  }

  authenticate() {

    // Implement your token authentication logic here
    console.log('Authenticating with token:', this.token);
  }
}
