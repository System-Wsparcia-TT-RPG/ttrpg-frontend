import { Component } from '@angular/core';

@Component({
  selector: 'app-extras',
  standalone: true,
  imports: [],
  templateUrl: './extras.component.html',
  styleUrl: './extras.component.css'
})
export class ExtrasComponent {
  skill1 = { name: 'Fireball', description: 'Casts a ball of fire dealing damage to enemies.' };
  skill2 = { name: 'Teleport', description: 'Instantly move to a nearby location.' };
  skill3 = { name: 'Shield', description: 'Creates a magical shield that absorbs damage.' };
}
