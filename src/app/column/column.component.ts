import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Task } from '../task';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { EnterCheckerService } from '../enter-checker.service';

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
  @ViewChild('addField', { static: false }) addField: ElementRef;

  adding = false;

  constructor(private ecs: EnterCheckerService) { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    // Not working, handle in parent or use service
    // if (event.previousContainer === event.container) {
    //   moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    // } else {
    //   transferArrayItem(event.previousContainer.data,
    //     event.container.data,
    //     event.previousIndex,
    //     event.currentIndex);
    // }
  }

  openAdding() {
    this.adding = true;
  }
  closeAdding() {
    console.log('TODO: Add task: \n' + this.addField.nativeElement.value);
    this.adding = false;
  }

  checkIfEnter(event: KeyboardEvent) {
    if (this.ecs.checkEnter(event)) {
      this.closeAdding();
    }
  }
}
