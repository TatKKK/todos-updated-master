import { Injectable } from '@angular/core';
import { Todo } from '../Models/todo';


@Injectable({
  providedIn: 'root'
})
export class StorageService {
 private storageKey='todos';

 constructor() {} 

 setTodos(todos: Todo[]): void {
  localStorage.setItem(this.storageKey, JSON.stringify(todos));
}

getTodos(): Todo[] {
  const todosJSON = localStorage.getItem(this.storageKey);
  return todosJSON ? JSON.parse(todosJSON) : [];
}

removeTodo(storageKey:string){
  localStorage.removeItem(this.storageKey);
}


clearData(){
    localStorage.clear();
  }
}
