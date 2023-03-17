import { Component } from '@angular/core';
import { DebugService } from '../services/debug.service';

@Component({
  selector: 'app-debug-messages',
  templateUrl: './debug-messages.component.html',
  styleUrls: ['./debug-messages.component.css']
})
export class DebugMessagesComponent {
  constructor(private debugService : DebugService) {
  }
  messages : string[] = [];

  ngOnInit()
  {
    this.messages = this.debugService.getMessages();
  }
  show : boolean = true;
  toggleShow()
  {
    this.show = !this.show;
  }
}
