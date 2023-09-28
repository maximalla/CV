import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

import { Todo } from '../shared/interfaces/todo';
import { GeneralModel } from '../shared/types/general.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  m!: GeneralModel;

  constructor(
    private readonly apiService: ApiService,
    private readonly messageService: MessageService,
  ) {}

  init(m: GeneralModel): void {
    this.m = m;
    // this.loading = true;
    this.m.subscriptions.push(
      this.apiService.getTodos().subscribe({
        next: (todos) => {
          this.m.todos = todos;
        },
        error: (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Status Code: ' + JSON.stringify(error.status),
            life: 3000,
          });
        },
        complete: () => {
          /* this.loading = false;*/
        },
      }),
    );
  }

  createTodo(todo: Todo): void {
    this.m.subscriptions.push(
      this.apiService.addTodo(todo).subscribe({
        next: (todo) => {
          todo.id = Math.floor(Math.random() * 8000) + 201;
          this.m.todos.unshift(todo);
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Task Created',
            life: 3000,
          });
        },
        error: (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Status Code: ' + JSON.stringify(error.status),
            life: 3000,
          });
        },
      }),
    );
  }

  editTodo(todo: Todo) {
    this.m.subscriptions.push(
      this.apiService.updateTodo(todo).subscribe({
        next: (updatedTodo) => {
          const foundTodo = this.m.todos.find((t) => t.id === updatedTodo.id);
          foundTodo
            ? Object.assign(foundTodo, updatedTodo)
            : this.m.todos.push(updatedTodo);

          delete this.m.editedTodos[todo.id as number];

          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Task Updated',
            life: 3000,
          });
        },
        error: (error) => {
          const index = this.m.todos.findIndex((t) => t.id === todo.id);
          this.m.todos[index] = this.m.editedTodos[todo.id as number];
          delete this.m.editedTodos[todo.id as number];
          this.messageService.add({
            severity: 'error',
            summary: JSON.stringify(error.name).slice(1, -1),
            detail: 'Status Code: ' + JSON.stringify(error.status),
            life: 3000,
          });
        },
      }),
    );
  }

  deleteTodo(todo: Todo): void {
    if (todo.id) {
      this.m.subscriptions.push(
        this.apiService.deleteTodo(todo.id).subscribe({
          next: () => {
            this.m.todos = this.m.todos.filter((val) => val.id !== todo.id);
            this.messageService.add({
              severity: 'success',
              summary: 'Successful',
              detail: 'Task Deleted',
              life: 3000,
            });
          },
          error: (error) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Status Code: ' + JSON.stringify(error.status),
              life: 3000,
            });
          },
        }),
      );
    }
  }
}
