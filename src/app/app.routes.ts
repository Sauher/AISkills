import { Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { LogoutComponent } from './components/logout/logout.component';

export const routes: Routes = [
    // Felhasználói routeok
    {path: 'login', component: LoginComponent},
    {path: 'main', component: MainComponent},
    {path: 'logout', component: LogoutComponent},

    
    //Kivételes routeok

    {path: '', redirectTo: "/login", pathMatch: 'full'},

    {path: '**', component:NotfoundComponent}
];
