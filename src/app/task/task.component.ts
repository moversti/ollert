import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Task } from '../task';
import { EnterCheckerService } from '../enter-checker.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  editing = false;
  hovering = false;
  @ViewChild('editField', { static: false }) editField: ElementRef;

  @ViewChild('delete', { static: false }) delete: ElementRef;

  constructor(private ecs: EnterCheckerService) { }

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
    if (this.ecs.checkEnter(event)) {
      this.closeEdit();
    }
  }

  showDelete() {
    this.hovering = true;
  }

  hideDelete() {
    this.hovering = false;
  }

}
