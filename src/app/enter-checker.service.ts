import { Injectable } from '@angular/core';

@Injectable()
export class EnterCheckerService {

  constructor() { }

  checkEnter(event: KeyboardEvent) {
    return event.key === 'Enter' && !event.shiftKey;
  }
}
