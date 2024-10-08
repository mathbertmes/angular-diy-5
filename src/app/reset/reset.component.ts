import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-reset',
  standalone: true,
  imports: [],
  templateUrl: './reset.component.html',
  styleUrl: './reset.component.css'
})
export class ResetComponent {
  @Output() reset = new EventEmitter();
}
