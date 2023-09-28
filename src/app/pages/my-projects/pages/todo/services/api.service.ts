import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { AppConstants } from '../shared/constants/constants';
import { Todo } from '../shared/interfaces/todo';
import { User } from '../shared/interfaces/user';
import { GeneralModel } from '../shared/types/general.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private m!: GeneralModel;

  constructor(private readonly http: HttpClient) {}

  init(m: GeneralModel) {
    this.m = m;
  }

  getTodos(): Observable<Todo[]> {
    return this.http
      .get<Todo[]>(AppConstants.apiUrl, {
        params: new HttpParams()
          .set('userId', this.m.currentUser.id)
          .set('custom', 'anything'),
        // params,
      })
      .pipe(
        catchError((error) => {
          console.log('Error', error.message);
          return throwError(error);
        }),
      );
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(AppConstants.apiUrl, todo).pipe(
      catchError((error) => {
        console.log('Error', error.message);
        return throwError(error);
      }),
    );
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(AppConstants.apiUrl + `/${todo.id}`, todo).pipe(
      catchError((error) => {
        console.log('Error', error);
        return throwError(error);
      }),
    );
  }

  deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(AppConstants.apiUrl + `/${id}`).pipe(
      catchError((error) => {
        console.log('Error', error.message);
        return throwError(error);
      }),
    );
  }

  getUserData(email: string): Observable<User[]> {
    return this.http
      .get<User[]>(AppConstants.apiUserUrl, {
        params: new HttpParams().set('email', email),
      })
      .pipe(
        catchError((error) => {
          console.log('Error', error.message);
          return throwError(error);
        }),
      );
  }
}
