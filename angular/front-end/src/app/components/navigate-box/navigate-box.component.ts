import { Component } from '@angular/core';
import { DescriptionComponent } from './description/description.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { ExtrasComponent } from './extras/extras.component';
// import { FeaturesComponent } from './features/features.component';
import { NotesComponent } from './notes/notes.component';
import { SpellsComponent } from './spells/spells.component';
import { BoxNavbarComponent } from './box-navbar/box-navbar.component';

@Component({
  selector: 'app-navigate-box',
  standalone: true,
  imports: [DescriptionComponent, EquipmentComponent, 
    ExtrasComponent, NotesComponent, SpellsComponent, //FeaturesComponent,
    BoxNavbarComponent],
  templateUrl: './navigate-box.component.html',
  styleUrl: './navigate-box.component.css'
})
export class NavigateBoxComponent {
  public active: number = 1;

  change_active_component(new_active: number){
    this.active = new_active;
  }

}
