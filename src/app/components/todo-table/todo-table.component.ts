import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../Models/todo';
import { StorageService } from '../../services/local-storage.service';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrl: './todo-table.component.css'
})
export class TodoTableComponent implements OnInit {
  todos:Todo[]=[];
  
  constructor(public storageService:StorageService, private todoService:TodoService){}
  
  ngOnInit():void{
    this.loadTodos();
  }
  loadTodos(): void {
    this.todos = this.todoService.getTodos();
  }

  toggleTodo(todoId:number): void {
    this.todoService.toggleTodo(todoId)
    this.loadTodos();
  }

  deleteTodo(todoId:number):void{
    this.todoService.deleteTodo(todoId);

    this.todos=this.todoService.getTodos();
    console.log('should be deleted', todoId);
  }
}
