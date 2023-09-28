import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ApiService } from '../../services/api.service';
import { TodoService } from '../../services/todo.service';
import { AppConstants } from '../../shared/constants/constants';
import { UnsavedChangesGuard } from '../../shared/guards/unsaved-changes.guard';
import { Todo } from '../../shared/interfaces/todo';
import { GeneralModel } from '../../shared/types/general.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit, OnDestroy {
  m: GeneralModel = new GeneralModel();

  constructor(
    public readonly apiService: ApiService,
    public readonly todoService: TodoService,
    private readonly messageService: MessageService,
    private readonly confirmationService: ConfirmationService,
    private readonly unsavedChangesGuard: UnsavedChangesGuard,
  ) {}

  ngOnInit(): void {
    const currentUserString = localStorage.getItem(
      AppConstants.localStorageUserKey, // лишня перевірка
    );
    if (currentUserString) this.m.currentUser = JSON.parse(currentUserString);
    this.apiService.init(this.m);
    this.todoService.init(this.m);
    this.unsavedChangesGuard.init(this.m);
  }

  ngOnDestroy(): void {
    this.m.subscriptions.forEach((subscription) => subscription?.unsubscribe());
  }

  openNew(): void {
    this.m.todo = {};
    this.m.submitted = false;
    this.m.todoDialog = true;
  }

  deleteSelectedTodos(): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected todos?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.m.selectedTodos?.forEach((todo) =>
          this.todoService.deleteTodo(todo),
        );
        this.m.selectedTodos = null;
      },
    });
  }

  hideDialog(): void {
    this.m.todoDialog = false;
    this.m.submitted = false;
  }

  saveTodo(): void {
    this.m.submitted = true;
    if (this.m.todo.title?.trim()) {
      this.todoService.createTodo(this.m.todo);
      this.todoService.m.todos = [...this.todoService.m.todos];
      this.m.todoDialog = false;
      this.m.todo = {};
    }
  }

  onRowEditInit(todo: Todo) {
    this.m.editedTodos[todo.id as number] = { ...todo };
  }

  onRowEditSave(todo: Todo) {
    this.todoService.editTodo(todo);
    console.log(this.m.editedTodos);
  }

  onRowEditCancel(todo: Todo, index: number) {
    this.todoService.m.todos[index] = this.m.editedTodos[todo.id as number];
    delete this.m.editedTodos[todo.id as number];
  }

  deleteTodo(todo: Todo): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + todo.title + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.todoService.deleteTodo(todo);
        this.m.todo = {};
      },
    });
  }

  getSeverity(status: undefined | boolean) {
    return status ? 'success' : '';
  }
}
