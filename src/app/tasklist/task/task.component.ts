import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Output() taskExport = new EventEmitter<string>();
  exportTask: any = '';

  addTask() {
    if (this.exportTask.trim() !== '') {
      this.taskExport.emit(this.exportTask);
    }
    this.exportTask = '';
  }
}
