import { Routes } from '@angular/router';
import { NavigateBoxComponent } from './components/navigate-box/navigate-box.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CharacterBoardComponent } from './components/character-board/character-board.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'character-board', component: CharacterBoardComponent},
    {path: 'browse', component: NavigateBoxComponent},
    {path: '', redirectTo:'home', pathMatch:'full'},
    {path: '**', redirectTo:'home'},
    
];