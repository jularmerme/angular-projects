import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  // Set Up my property for this service
  messages: string[] = [];

  constructor() {}

  // now we are going to add some methods to perform actions within this service when called/invoked
  // add = to create a new message and add message to our array
  add(message: string) {
    this.messages.push(message);
  }
  // clear = empty our message array
  clear() {
    this.messages = [];
  }
}
