import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';


export const authGuard: CanActivateFn = (route, state) => {
  
  const service = inject(AuthService)
  const router = inject(Router)

  if( service.isLoggedIn()){
    return true
  }

  router.navigate(['/login']);
  return false
};
