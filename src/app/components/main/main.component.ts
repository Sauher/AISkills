import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { APIService } from '../../services/apiservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  constructor(
    private api : APIService,
    private router : Router
  ) {}

  cards = [
    {
      image: 'chatterblast.png',
      title: 'ChatterBlast',
      description: 'ChatterBlast is a conversational AI that can engage in natural language conversations with users.',
      buttonText: 'Use'
    },
    {
      image: '/dreamweaver.jpg',
      title: 'DreamWeaver',
      description: 'Dreamweaver is an image generation AI that can create stunning visuals from text prompts.',
      buttonText: 'Use'
    },
    {
      image: 'mindreader.jpg',
      title: 'MindReader',
      description: 'Mindreader is an image recognition AI that can identify objects, people, and even emotions in photos.',
      buttonText: 'Use',
      url:""
    }
  ];

  onCardClick(item: any) {
    this.router.navigate(['/tokenauth/'+item.toLowerCase()]);
    
    }
  }

