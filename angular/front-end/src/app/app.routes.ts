import { Routes } from '@angular/router';
import { NavigateBoxComponent } from './components/navigate-box/navigate-box.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CharacterBoardComponent } from './components/character-board/character-board.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'character-board', component: CharacterBoardComponent},
    {path: 'browse', component: NavigateBoxComponent},
    {path: '', redirectTo:'', pathMatch:'full'},
    {path: '**', redirectTo:''},
    
];