import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
/**
 * this service is ussualy imported as a public dependeny so that
 * each component can display messages property of this service
 */
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
