import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [FormsModule, NgForOf],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})

export class NotesComponent {
  newNote: string = ''; 
  notes: string[] = ['Note 1', 'Note 2', 'Note 3'];

  addNote(): void {
    if (this.newNote.trim() !== '') {
      this.notes.push(this.newNote);
      this.newNote = '';  
    }
  }
}

