import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  features = [
    {
      name: 'Strength',
      description: 'Strength is a measure of your character\'s physical power. It affects how much they can lift, how hard they can hit, and their general physical prowess. High strength can be crucial for warriors and characters who engage in a lot of physical combat.'
    },
    {
      name: 'Dexterity',
      description: 'Dexterity represents agility, reflexes, and balance. It influences a character\'s ability to dodge attacks, move silently, and perform tasks that require finesse. Rogues and archers typically rely on high dexterity for their skills and attacks.'
    },
    {
      name: 'Constitution',
      description: 'Constitution is a measure of your character\'s overall health and stamina. It affects their hit points and resistance to physical ailments. A high constitution is important for all characters, especially those who find themselves frequently in the midst of battle.'
    }
  ];
}
