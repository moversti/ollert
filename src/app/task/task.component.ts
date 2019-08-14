import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  editing = false;
  @ViewChild('editField', { static: false }) editField: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  openEdit() {
    this.editing = true;
  }

  closeEdit() {
    this.task.text = this.editField.nativeElement.value;
    this.editing = false;
  }

  checkIfEnter(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      this.closeEdit();
    }
  }

}
