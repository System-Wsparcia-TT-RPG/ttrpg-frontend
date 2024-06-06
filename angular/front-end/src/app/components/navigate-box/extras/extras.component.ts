import { Component } from '@angular/core';

@Component({
  selector: 'app-extras',
  standalone: true,
  imports: [],
  templateUrl: './extras.component.html',
  styleUrl: './extras.component.css'
})
export class ExtrasComponent {
  skill1 = { name: 'Fireball', description: 'Casts a ball of fire dealing damage to enemies. The fireball travels in a straight line and explodes upon impact, causing area damage to all enemies caught in the blast radius. It is especially effective against groups of weaker enemies or as an opening move to start a combat encounter.' };
  skill2 = { name: 'Teleport', description: 'Instantly move to a nearby location. This ability allows the user to quickly reposition themselves on the battlefield, either to escape danger, reach strategic points, or surprise enemies. The range and cooldown of the teleport can vary depending on the user\'s level and skill upgrades.' };
  skill3 = { name: 'Shield', description: 'Creates a magical shield that absorbs damage. The shield can withstand a certain amount of damage before breaking, providing temporary protection against attacks. This ability is crucial for surviving heavy assaults and can be used to protect allies in critical moments. The duration and strength of the shield depend on the user\'s magic power and skill level.' };
}
