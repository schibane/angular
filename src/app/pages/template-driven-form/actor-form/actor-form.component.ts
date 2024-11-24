import { Component } from '@angular/core';
import { Actor } from '../../../Models/actor';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-actor-form',
  templateUrl: './actor-form.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class ActorFormComponent {
  skills = ['Method Acting', 'Singing', 'Dancing', 'Swordfighting'];
  model = new Actor(18, 'Tom Cruise', this.skills[3], 'CW Productions');
  submitted = false;
  onSubmit() {
    this.submitted = true;
  }

  newActor() {
    this.model = new Actor(42, '', '');
  }
}
