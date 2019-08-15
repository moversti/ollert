import { Injectable } from '@angular/core';
import { IndexedDBService } from './indexed-db.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private db: IndexedDBService) { }
}
