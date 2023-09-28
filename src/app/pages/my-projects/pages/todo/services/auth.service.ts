import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { lastValueFrom, Subject } from 'rxjs';
import { AppConstants } from '../shared/constants/constants';
import { ApiService } from './api.service';

@Injectable()
export class AuthService {
  public error$: Subject<string> = new Subject<string>();

  constructor(
    private readonly http: HttpClient,
    private readonly apiService: ApiService,
    private readonly router: Router,
  ) {}

  isAuthenticated(): boolean {
    return !!localStorage.getItem(AppConstants.localStorageUserKey);
  }

  async login(email: string): Promise<boolean> {
    const user = (await lastValueFrom(this.apiService.getUserData(email)))[0];
    console.log(user);
    if (user) {
      localStorage.setItem(
        AppConstants.localStorageUserKey,
        JSON.stringify(user),
      );
      this.router.navigateByUrl('');

      return true;
    }
    return false;
  }

  logout() {
    localStorage.clear();
  }
}
