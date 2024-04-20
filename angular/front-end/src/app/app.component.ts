import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BaseStatsComponent } from './components/base-stats/base-stats.component';
import { ConditionsListComponent } from './components/conditions-list/conditions-list.component';
import { HitPointsComponent } from './components/hit-points/hit-points.component';
import { NavigateBoxComponent } from './components/navigate-box/navigate-box.component';
import { ProficienciesLangugesComponent } from './components/proficiencies-languges/proficiencies-languges.component';
import { SavingThrowsComponent } from './components/saving-throws/saving-throws.component';
import { SensesComponent } from './components/senses/senses.component';
import { SingleStatsComponent } from './components/single-stats/single-stats.component';
import { SkillsComponent } from './components/skills/skills.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { FetchStaticDataService } from './services/fetch-static-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BaseStatsComponent,ConditionsListComponent,HitPointsComponent,
    NavigateBoxComponent, ProficienciesLangugesComponent, SavingThrowsComponent, SensesComponent, 
    SingleStatsComponent, SkillsComponent, NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-end';

  character: any; // This will hold the fetched data

  constructor(private dataService: FetchStaticDataService) {}

  ngOnInit() {
    this.dataService.getJsonData().subscribe({
      next: (data) => {
        this.character = data;
        console.log(this.character)
      },
      error: (err) => {
        console.error('Failed to load character data:', err);
      }
    });
  }


}
