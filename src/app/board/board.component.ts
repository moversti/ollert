import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  dropLists = ['leftCol', 'centerCol', 'rightCol'];

  leftCol: Task[];
  centerCol: Task[];
  rightCol: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTasks('left').subscribe(tasks => this.leftCol = tasks);
    this.taskService.getTasks('center').subscribe(tasks => this.centerCol = tasks);
    this.taskService.getTasks('right').subscribe(tasks => this.rightCol = tasks);
  }


}
