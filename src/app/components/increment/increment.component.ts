import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-increment',
  standalone: true,
  imports: [],
  templateUrl: './increment.component.html',
  styleUrl: './increment.component.css'
})
export class IncrementComponent {
  @Output() increment= new EventEmitter();

    
    ngOnInit(): void {}
}
