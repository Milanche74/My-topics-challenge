import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public messages: string[]= [];

  newMessage(message: string) {
    this.messages?.push(message)
  }
  
  emptyMessages() {
    this.messages = [];
  }


  constructor() { }
}
