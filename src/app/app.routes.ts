import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [

    {
        path: '',
        redirectTo : 'login',
        pathMatch : 'full'
    },
    {
        path:'login',
        component:LoginComponent

    },
    {
        path:'home',
        canActivate :[authGuard],

        loadComponent : () => 
            import('./components/home/home.component')
        .then(m => m.HomeComponent)

    },
    {
        path: '**',
        redirectTo :'login'
    }
];
