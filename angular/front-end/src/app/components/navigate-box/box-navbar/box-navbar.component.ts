import { NgClass } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-box-navbar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './box-navbar.component.html',
  styleUrl: './box-navbar.component.css'
})
export class BoxNavbarComponent {
  public active: number = 1;
  @Output() current: EventEmitter<number> = new EventEmitter<number>();

  change_current(new_current: number) {
    this.active = new_current;
    this.current.emit(this.active);
  }
}
