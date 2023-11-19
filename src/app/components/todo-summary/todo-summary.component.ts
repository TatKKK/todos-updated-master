import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../Models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-summary',
  templateUrl: './todo-summary.component.html',
  styleUrl: './todo-summary.component.css'
})
export class TodoSummaryComponent implements OnInit{
  @Input() todos:Todo[]=[];
  
  constructor(private todoService:TodoService){}

  ngOnInit(): void {
    
  }
 getTotal(){
  return this.todoService.getTotal();
 }
getCompleted(){
  return this.todoService.getCompleted();
}
getPending(){
  return this.todoService.getPending();
}

}
