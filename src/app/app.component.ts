import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IncrementComponent } from './components/increment/increment.component';
import { DecrementComponent } from './components/decrement/decrement.component';
import { MessageComponent } from './message/message.component';
import { ResetComponent } from './reset/reset.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IncrementComponent, DecrementComponent, MessageComponent, ResetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  points = 0

  increment(){
    this.points = this.points + 1
  }

  decrement(){
    this.points = this.points - 1
  }

  reset(){
    this.points = 0
  }
}
