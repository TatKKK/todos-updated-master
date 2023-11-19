import { Injectable } from '@angular/core';
import { Todo } from '../Models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos:Todo[]=[];
  constructor() { }

  addTodo(newTodo:Todo):void{
    this.todos.push(newTodo);
  }

  getTodos():Todo[]{
    return this.todos;
  }

  toggleTodo(todoId:number):void{
    const todo=this.todos.find(t=>t.id===todoId);
    if(todo){
      todo.completed=!todo.completed;
    }
  }

  deleteTodo(todoId:number):void{
    this.todos = this.todos.filter(t => t.id !== todoId);
  }

  getTotal():number{
    return this.todos.length;
  }

  getCompleted():number{
    return this.todos.filter(todo=>todo.completed).length;
  }
  getPending():number{
    return this.todos.filter(todo=>!todo.completed).length;
  }
}
