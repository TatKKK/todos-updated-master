import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../Models/todo';

@Component({
  selector: 'app-todo-summary',
  templateUrl: './todo-summary.component.html',
  styleUrl: './todo-summary.component.css'
})
export class TodoSummaryComponent implements OnInit{
  @Input() todos:Todo[]=[];
  
  constructor(){}

  ngOnInit(): void {
    
  }
 getTotal(){
  return this.todos.length;
 }
 getCompleted(): number {
  return this.todos.filter(todo => todo.completed).length;
}

getPending(): number {
  return this.todos.filter(todo => !todo.completed).length;
}

}
