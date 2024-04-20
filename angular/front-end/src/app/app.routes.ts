import { Routes } from '@angular/router';
import { NavigateBoxComponent } from './components/navigate-box/navigate-box.component';

export const routes: Routes = [
    {path: 'browse', component: NavigateBoxComponent},
    {path: '', redirectTo:'/home', pathMatch:'full'},
    {path: '**', redirectTo:'/home'}
];