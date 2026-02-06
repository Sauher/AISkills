import { Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    // Felhasználói routeok
    {path: 'login', component: LoginComponent},

    
    //Kivételes routeok

    {path: '', redirectTo: "/login", pathMatch: 'full'},

    {path: '**', component:NotfoundComponent}
];
