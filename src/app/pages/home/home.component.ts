import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  messages:string[] = [];
  constructor(private service: MessagesService){
  }

  ngOnInit(): void {
    this.messages = this.service.getMessages();
  }
}
