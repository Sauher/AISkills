import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from '../../services/apiservice';
import { MessageService } from '../../services/messageservice';

@Component({
  selector: 'app-tokenauth',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './tokenauth.component.html',
  styleUrl: './tokenauth.component.scss'
})
export class TokenauthComponent implements OnInit {
  token: string = '';
  ai: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: APIService,
    private msg: MessageService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ai = params['aiName']; // Get from route parameter
      console.log('AI Name:', this.ai);
    });
  }

  authenticate() {
    this.api.tokenauth(this.token, 'string').then(res => {
      console.log('Response:', res);
      
      this.msg.show('success', 'Siker', "Sikeres autentikáció!");
      
      const aiName = this.ai.toLowerCase();
      const conversationId = res.conversation_id;
      
      if(aiName === "chatterblast") {
        this.router.navigate([`/chatterblast/${conversationId}`]);
      }
      else if(aiName === "dreamweaver") {
        this.router.navigate([`/dreamweaver/${conversationId}`]);
      }
      else if(aiName === "mindreader") {
        this.router.navigate([`/mindreader/${conversationId}`]);
      }
    }).catch(error => {
      console.error('Authentication error:', error);
      this.msg.show('danger', 'Hiba', "Sikertelen autentikáció!");
    });
  }
}