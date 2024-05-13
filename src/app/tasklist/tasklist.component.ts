import { Component } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [TaskComponent, FormsModule, CommonModule],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.scss',
})
export class TasklistComponent {
  taskArray: string[] = [];

  receiveTask(data: string) {
    this.taskArray.push(data);
  }
}
