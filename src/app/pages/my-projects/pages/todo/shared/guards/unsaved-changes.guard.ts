import { Injectable } from '@angular/core';
import { CanDeactivateFn, Router } from '@angular/router';
import { MainComponent } from '../../pages/main/main.component';
import { AuthService } from '../../services/auth.service';
import { GeneralModel } from '../types/general.model';

@Injectable({
  providedIn: 'root',
})
export class UnsavedChangesGuard {
  m!: GeneralModel;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {}

  init(m: GeneralModel) {
    this.m = m;
  }

  canDeactivate(): boolean {
    if (Object.keys(this.m.editedTodos).length) {
      return window.confirm(
        'Warning: You are trying to leave this page.\nAny unsaved changes will be lost.',
      );
    }
    return true;
  }
}

export const unsavedChangesGuard: CanDeactivateFn<any> = (
  main: MainComponent,
  route,
  state,
) => {
  return true;
};
