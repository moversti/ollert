import { Injectable } from '@angular/core';
import { IndexedDBService } from './indexed-db.service';
import { Task } from './task';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  leftTasks: Task[] = [new Task('qwer'), new Task('asdf'), new Task('zxc')];
  centerTasks: Task[] = [new Task('tyui'), new Task('ghjk'), new Task('vbn')];
  rightTasks: Task[] = [new Task('opå'), new Task('löä'), new Task('m,.-')];

  constructor(private db: IndexedDBService) { }

  moveInSameList(container, prevIndex, curIndex) {
    moveItemInArray(container.data, prevIndex, curIndex);
  }

  transferToOtherList(prevContainer, container, prevIndex, curIndex) {
    transferArrayItem(prevContainer.data, container.data, prevIndex, curIndex);
  }

  getTasks(list: string): Observable<Task[]> {
    switch (list) {
      case 'left': {
        return of(this.leftTasks);
      }
      case 'center': {
        return of(this.centerTasks);
      }
      case 'right': {
        return of(this.rightTasks);
      }
      default: {
        return of([]);
      }
    }
  }

}
