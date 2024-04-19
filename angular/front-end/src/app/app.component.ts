import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BaseStatsComponent } from './components/base-stats/base-stats.component';
import { ConditionsListComponent } from './components/conditions-list/conditions-list.component';
import { HitPointsComponent } from './components/hit-points/hit-points.component';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { NavigateBoxComponent } from './components/navigate-box/navigate-box.component';
import { ProficienciesLangugesComponent } from './components/proficiencies-languges/proficiencies-languges.component';
import { SavingThrowsComponent } from './components/saving-throws/saving-throws.component';
import { SensesComponent } from './components/senses/senses.component';
import { SingleStatsComponent } from './components/single-stats/single-stats.component';
import { SkillsComponent } from './components/skills/skills.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BaseStatsComponent,ConditionsListComponent,HitPointsComponent,
    MainNavbarComponent, NavigateBoxComponent, ProficienciesLangugesComponent, SavingThrowsComponent,
    SensesComponent, SingleStatsComponent, SkillsComponent, NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-end';
}
