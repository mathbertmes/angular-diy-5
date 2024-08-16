import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-decrement',
  standalone: true,
  imports: [],
  templateUrl: './decrement.component.html',
  styleUrl: './decrement.component.css'
})
export class DecrementComponent {
  @Output() decrement= new EventEmitter();
}
