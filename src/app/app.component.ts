import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { APIService } from './services/apiservice';
import { MessageComponent } from './components/message/message.component';

import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MessageComponent,FooterComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  app_title = 'AISkills';
  app_author = 'Schauer Oliver és TJO';

}
