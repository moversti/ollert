import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

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
    // Not working, handle in parent or use service
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
