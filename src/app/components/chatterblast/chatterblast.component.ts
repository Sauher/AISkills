import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { APIService } from '../../services/apiservice';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chatterblast',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatterblast.component.html',
  styleUrl: './chatterblast.component.scss'
})
export class ChatterblastComponent {
  messages: any[] = [];
  isLoading: boolean = false;
  userInput: string = '';
  conversation: string = '';

  constructor(private api: APIService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.conversation = params['conversationid']; // Get from route parameter
      console.log('Conversation id:', this.conversation);
    });
  }
  sendMessage() {
    if (!this.userInput.trim()) return;

    // Add user message
    this.messages.push({
      text: this.userInput,
      sender: 'user'
    });

    const prompt = this.userInput;
    this.userInput = '';

    // Get AI response
    this.api.getMessage(this.conversation).then(res => {
      console.log('AI Response:', res);

    this.addAIMessageWithAnimation(res.response);
  })
    this.api.putMessage(this.conversation, prompt).then(res => {
      console.log('Message sent:', res);
    }).catch(error => {
      console.error('Error sending message:', error);
    });
}

private addAIMessageWithAnimation(text: string) {
  const messageIndex = this.messages.length;
  this.messages.push({
    text: '',
    sender: 'ai'
  });

  let charIndex = 0;
  const typeInterval = setInterval(() => {
    if (charIndex < text.length) {
      this.messages[messageIndex].text += text[charIndex];
      charIndex++;
    } else {
      clearInterval(typeInterval);
    }
  }, 20); // Adjust speed here (milliseconds per character)
}
}