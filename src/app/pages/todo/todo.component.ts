import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Models/todo';
import { StorageService } from '../../services/local-storage.service';
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

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  handleNewTodo(newTodo: Todo) {
    this.todoService.addTodo(newTodo); 
    this.todos = this.todoService.getTodos(); 
    console.log('todo added:', newTodo);
  }
  

}
