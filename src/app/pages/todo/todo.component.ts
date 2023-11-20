import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
  title="Todo App";
  todos:Todo[]=[];

  constructor( private todoService:TodoService){}

  ngOnInit():void{
    this.getTodos();
  }
  getTodos(): void {
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
   
  }
  onTodoAdded(newTodo: Todo):void {
  this.todos.push(newTodo);
  }
  

}
