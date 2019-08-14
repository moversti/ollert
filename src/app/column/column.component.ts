import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {

  @Input() tasks: Task[];
  @Input() name: string;
  @Input() dropLists: string[];
  @Input() listId: string;
  @Output() dragged = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log('got event in column');
    this.dragged.emit('kek');
    // moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }
}
