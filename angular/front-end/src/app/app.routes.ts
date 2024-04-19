import { Routes } from '@angular/router';
import { HitPointsComponent } from './components/hit-points/hit-points.component';
import { NavigateBoxComponent } from './components/navigate-box/navigate-box.component';

export const routes: Routes = [
    {path: 'home', component:HitPointsComponent},
    {path: 'browse', component: NavigateBoxComponent},
    {path: '', redirectTo:'/home', pathMatch:'full'},
    {path: '**', redirectTo:'/home'}
];