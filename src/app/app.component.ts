import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TasklistComponent } from './tasklist/tasklist.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, TasklistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'To-Do';
}
