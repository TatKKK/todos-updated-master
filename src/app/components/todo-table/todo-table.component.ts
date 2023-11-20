import { Component,  OnInit } from '@angular/core';
import { Todo } from '../../Models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrl: './todo-table.component.css'
})
export class TodoTableComponent implements OnInit {
  todos:Todo[]=[];
  
  constructor( private todoService:TodoService){}
  
  ngOnInit():void{
    this.getTodos();
  }
  getTodos(): void {
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }
  

  toggleTodo(todoId:number): void {
    this.todoService.toggleTodo(todoId).subscribe(()=>{
      this.getTodos()
    })
  }

  deleteTodo(todo:Todo):void{
  this.todoService.deleteTodo(todo.id).subscribe(()=>{
    this.getTodos()
  });
  }
}
