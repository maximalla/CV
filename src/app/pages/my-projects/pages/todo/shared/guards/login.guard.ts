import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

export const CanActivateLogin: CanActivateFn = async () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isAuthenticated()) {
    window.alert('Access Denied, Login is Required to Access This Page!');
    await router.navigateByUrl('/login');
    return false;
  }

  return true;
};
