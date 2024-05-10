import { Component, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { Output } from '@angular/core';

@Component({
  selector: 'app-hit-button',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './hit-button.component.html',
  styleUrl: './hit-button.component.css'
})
export class HitButtonComponent {
  @Input() buttonText: string = "";
  @Input() buttonColor: string = "";
  
  @Output() buttonClick = new EventEmitter<boolean>();

  click(){
    this.buttonClick.emit(true);
  }
}
