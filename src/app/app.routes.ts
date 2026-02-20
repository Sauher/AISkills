import { Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { LogoutComponent } from './components/logout/logout.component';
import { TokenauthComponent } from './components/tokenauth/tokenauth.component';
import { ChatterblastComponent } from './components/chatterblast/chatterblast.component';
import { DreamweaverComponent } from './components/dreamweaver/dreamweaver.component';
import { MindreaderComponent } from './components/mindreader/mindreader.component';

export const routes: Routes = [
    // Felhasználói routeok
    {path: 'login', component: LoginComponent},
    {path: 'main', component: MainComponent},
    {path: 'logout', component: LogoutComponent},
    { path: 'tokenauth/:aiName', component: TokenauthComponent },
    {path: 'chatterblast/:conversationid', component: ChatterblastComponent},
    {path: 'dreamweaver/:conversationid', component: DreamweaverComponent},
    {path: 'mindreader/:conversationid', component: MindreaderComponent},
    
    //Kivételes routeok

    {path: '', redirectTo: "/login", pathMatch: 'full'},

    {path: '**', component:NotfoundComponent}
];
