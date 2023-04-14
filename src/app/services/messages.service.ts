import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private messsages:string[] = [];

  constructor() { }

  addMessage(message:string):void{
    this.messsages.push(message);
  }

  getMessages():string[]{
    return this.messsages;
  }

  clearMessages():void{
    this.messsages = [];
  }
}
