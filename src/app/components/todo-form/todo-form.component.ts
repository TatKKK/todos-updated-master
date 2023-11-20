import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  newTodoTitle:string="";
  newTodoDeadline:string="";

  @Output() todoAdded=new EventEmitter<Todo>();

constructor(private todoService:TodoService){}

  addTodo():void{

    //es aq unda iyos tu iq?

  const currentDate=new Date().toISOString().split('T')[0];
     if(new Date(this.newTodoDeadline)<new Date(currentDate)){
        console.log('Invalid date');
     return;
      }
  if(!this.newTodoTitle.trim()){
      console.log('error: title is required field');
      return;
    }
  if(!this.newTodoDeadline){
      console.log('error');
      return;
    }
       
  //------------------------------------------------
  const newTodo:Todo={
    id:Date.now(),
    title:this.newTodoTitle,
    deadline:this.newTodoDeadline,
    completed:false
  }
  
 this.todoService.addTodo(newTodo).subscribe({
  next:(todo)=>{
    this.todoAdded.emit(todo);
  },
  error:(error)=>{
    console.log('errorrr')
  }
 });
// Reset
this.newTodoTitle = '';
this.newTodoDeadline = '';
}



}