import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CharacterDataService } from '../../services/character-data.service';
import { OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import {
  CharacterApiService,
  CreateCharacterInput,
} from '../../services/character-api.service';
import { register } from 'node:module';

const sampleCharacter = {
  nickname: 'Character',
  xp: 15200,
  weapon_proficiencies: ['Simple', 'Martial'],
  armor_proficiencies: ['Light', 'Medium', 'Heavy', 'Shields'],
  tool_proficiencies: ["Smith's Tools", "Brewer's Supplies"],
  player: 1,
  race: 1,
  background: 1,
  details: {
    age: 32,
    height: '170cm',
    weight: 75,
    eyes: 'Blue',
    skin: 'Fair',
    hair: 'Brown',
    personality:
      'Cheerful and optimistic, always looking for the best in people and situations.',
    ideal:
      'I believe that everyone deserves a chance to prove themselves, no matter their past.',
    bond: 'I am searching for my long-lost sibling, who disappeared when we were children.',
    flaw: 'I am easily distracted by shiny objects and beautiful things.',
    backstory:
      'Once a member of a noble family, I was exiled from my home after a scandalous affair with a servant. Now I wander the land, searching for my lost sibling and trying to make a name for myself as a hero.',
    physical: 'Toned and athletic, with a few scars from past battles.',
  },
  treasure: {
    pp: 21,
    gp: 37,
    ep: 15,
    sp: 0,
    cp: 3,
  },
  ability_scores: {
    strength: 6,
    dexterity: 7,
    constitution: 9,
    intelligence: 10,
    wisdom: 7,
    charisma: 4,
  },
  skills: {
    acrobatics: 0,
    animal_handling: 1,
    arcana: 0,
    athletics: 5,
    deception: 3,
    history: 0,
    insight: 1,
    intimidation: 3,
    investigation: 0,
    medicine: 1,
    nature: 0,
    perception: 1,
    performance: 3,
    persuasion: 5,
    religion: 0,
    sleight_of_hand: 0,
    stealth: 0,
    survival: 1,
  },
  saving_throws: {
    strength: 5,
    dexterity: 0,
    constitution: 2,
    intelligence: 0,
    wisdom: 1,
    charisma: 5,
  },
  combat: {
    armor_class: 18,
    initiative: 0,
    speed: 30,
    hit_points: 52,
    hit_dice: '6d10',
    death_saves: {
      successes: 0,
      failures: 0,
    },
  },
  classes: [1, 2],
  feats: [1],
  spells: [1],
  weapons: [1, 2],
  equipment: [1, 2, 3],
} satisfies CreateCharacterInput;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  characters: any[] = [];
  selectedCharacterId: number = 0;

  constructor(
    private userService: UserService,
    private router: Router,
    private characterDataService: CharacterDataService,
    private characterApi: CharacterApiService
  ) {}

  ngOnInit(): void {
    this.characters = this.characterDataService.characters;
  }

  isLogged() {
    return this.userService.isLoggedIn();
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  goToCharacterBoard() {
    this.router.navigate(['/character-board']);
  }

  async createCharacter() {
    const character = {
      ...sampleCharacter,
      nickname: 'Character' + Math.floor(Math.random() * 100),
    };
    const characterId = await lastValueFrom(
      this.characterApi.createCharacter(character)
    );

    this.characterDataService.currentCharacter = await lastValueFrom(
      this.characterDataService.getCharacter(characterId)
    );

    console.log('created character');
    this.characters = this.characterDataService.characters;
  }

  async deleteCharacter() {
    if (
      confirm(
        `Delete character ${this.characterDataService.currentCharacter.nickname}?`
      )
    ) {
      await lastValueFrom(
        this.characterDataService.deleteCharacter(
          this.characterDataService.charId
        )
      );
      this.characters = this.characterDataService.characters;
    }
  }

  onCharacterChange(event: any) {
    this.characterDataService.charId = +event.target.value;
  }
}
