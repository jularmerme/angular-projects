import { Component, OnInit } from '@angular/core';
import { TaskItem } from 'src/app/models/task-item';
import {
  faTrash,
  faCircleDot,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasksList: TaskItem[] = [];
  taskName: string = '';
  faTrash = faTrash;
  faCircleDot = faCircleDot;
  faCircleCheck = faCircleCheck;

  constructor() {}

  ngOnInit(): void {}

  addTask() {
    console.log(this.taskName);

    const taskItem: TaskItem = {
      name: this.taskName,
      state: false,
    };

    this.tasksList.push(taskItem);

    this.taskName = '';
  }

  removeTask(index: number): void {
    this.tasksList.splice(index, 1);
  }

  updateTask(taskItem: TaskItem, index: number): void {
    this.tasksList[index].state = !taskItem.state;
  }
}
