import { Injectable } from '@angular/core';
import { Todo } from '../Models/todo';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos:Todo[]=[];
  
  constructor(private http: HttpClient, private messageService: MessageService) { }

  private todosUrl = 'api/todos';  

  private log(message: string) {
    this.messageService.add(`TodoService: ${message}`);
  }

  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
  }
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl)
      .pipe(
        tap(_ => this.log('fetched todos')),
        catchError(this.handleError<Todo[]>('getTodos', []))
      );
      console.log(this.todos);
  }
  

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }



getTodo(id: number): Observable<Todo> {
  const url = `${this.todosUrl}/${id}`;
  return this.http.get<Todo>(url).pipe(
    tap(_ => this.log(`fetched todo id=${id}`)),
    catchError(this.handleError<Todo>(`getTodo id=${id}`))
  );
}


  addTodo(newTodo:Todo):Observable<Todo>{
    return this.http.post<Todo>(this.todosUrl, newTodo, this.httpOptions).pipe(
      tap((todo:Todo)=>this.log(`added todo id=${todo.id}`)),
      catchError(this.handleError<Todo>('addTodo'))
    );
   
  }

  
  toggleTodo(todoId:number):Observable<any>{
    const url = `${this.todosUrl}/${todoId}/toggle`;
    return this.http.put(url, {}, this.httpOptions).pipe(
      tap(() => this.log(`toggled todo id=${todoId}`)),
      catchError(this.handleError('toggleTodo'))
    );
  }

  deleteTodo(todoId:number):Observable<any>{
    const url = `${this.todosUrl}/${todoId}`;
    return this.http.delete(url, this.httpOptions).pipe(
      tap(() => this.log(`deleted todo id=${todoId}`)),
      catchError(this.handleError('deleteTodo'))
    );
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
