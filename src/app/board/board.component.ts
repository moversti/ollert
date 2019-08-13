import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  leftCol: Task[] = [new Task('asd'), new Task('fgh')];
  centerCol: Task[] = [new Task('fgh'), new Task('jkl')];
  rightCol: Task[] = [new Task('jkl'), new Task('asd')];

  constructor() { }

  ngOnInit() {
  }

  handleEvent(event) {
    console.log('got event in board');
    // console.log(event);
    // moveItemInArray([], event.previousIndex, event.currentIndex);
  }
}
