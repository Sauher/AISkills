import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavItem } from '../../interfaces/navitem';
import { AuthService } from '../../services/authservice';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isLoggedIn = false;
  constructor(
    private auth: AuthService,
  ){}

  navItems:NavItem[] = []

  ngOnInit():void{
    this.auth.isLoggedIn$.subscribe(res =>{
      this.isLoggedIn = res;

      if(this.isLoggedIn){
        this.setupMenu(true);
      }
      else{
        this.setupMenu(false)
      }
      
    })
  }

  setupMenu(isLoggedIn:Boolean){
    this.navItems=[
      ...(isLoggedIn)?[
      {
        name: 'Kilépés',
        url:'logout'
      }
    ]
    :[
      {
        name: 'Belépés',
        url:'login'
      }
    ]]
  }
}
