import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from '../Models/todo';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos = [
      { id: 1, title:'Learn Angular', deadline:"11/24/2023" },
      { id: 2, title:'Learn React', deadline:"11/24/2023" },
      { id: 3, title:'Whatever', deadline:"11/24/2023" }     
    ];
    return {todos};
  }
  
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(todos: Todo[]): number {
    return todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 :0;
  }
}