import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DebugService {

  constructor() { }
  messages : string[] = [];

  addMessage(message : string) : void
  {
    this.messages.push(message);
  }

  getMessages() : string[]
  {
    return this.messages;
  }
}
