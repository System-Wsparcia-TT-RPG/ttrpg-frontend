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

  addNote(): void {  // Removed the parameter from the method and will use the class property directly
    if (this.newNote.trim() !== '') {
      this.notes.push(this.newNote);
      this.newNote = '';  // Clear the input after adding the note
    }
  }
}
