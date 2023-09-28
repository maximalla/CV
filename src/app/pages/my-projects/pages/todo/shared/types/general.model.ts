import { Subscription } from 'rxjs';
import { AppConstants } from '../constants/constants';
import { Todo } from '../interfaces/todo';
import { User } from '../interfaces/user';

export class GeneralModel {
  currentUser!: User;

  todos: Todo[] = [];

  inputSearch!: string;

  todoDialog: boolean = false;
  submitted: boolean = false;

  todo!: Todo;
  selectedTodos!: Todo[] | null;
  editedTodos: { [s: string]: Todo } = {};

  statuses = [
    { label: AppConstants.activeLabel, value: false },
    { label: AppConstants.completedLabel, value: true },
  ];

  subscriptions: Subscription[] = [];
}
