import { Routes } from '@angular/router';
import { NavigateBoxComponent } from './components/navigate-box/navigate-box.component';

export const routes: Routes = [
    {path: 'browse', component: NavigateBoxComponent},
    {path: '', redirectTo:'', pathMatch:'full'},
    {path: '**', redirectTo:''}
];