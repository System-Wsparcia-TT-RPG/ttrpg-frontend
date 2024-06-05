import { Component } from '@angular/core';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})

export class NotesComponent {
  newNote: string = ''; 
  notes: string[] = ['Note 1', 'Note 2', 'Note 3'];
  addNote(newNote: string): void {
    if (newNote.trim() !== '') {
      this.notes.push(newNote);
    }
  }
}
