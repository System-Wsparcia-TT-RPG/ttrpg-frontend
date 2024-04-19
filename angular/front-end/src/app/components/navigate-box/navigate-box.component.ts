import { Component } from '@angular/core';
import { ActionsComponent } from './actions/actions.component';
import { DescriptionComponent } from './description/description.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { ExtrasComponent } from './extras/extras.component';
import { FeaturesComponent } from './features/features.component';
import { NotesComponent } from './notes/notes.component';
import { SpellsComponent } from './spells/spells.component';

@Component({
  selector: 'app-navigate-box',
  standalone: true,
  imports: [ActionsComponent, DescriptionComponent, EquipmentComponent, 
    ExtrasComponent, FeaturesComponent, NotesComponent, SpellsComponent],
  templateUrl: './navigate-box.component.html',
  styleUrl: './navigate-box.component.css'
})
export class NavigateBoxComponent {
  
}
