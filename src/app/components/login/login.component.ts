import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username = ''
  password = ''
  errorMessage = ''

  private serive = inject(AuthService)
  private router = inject(Router)


  login(){
    const result = this.serive.login(
      this.username,
      this.password
    )

    if(result) {
      this.router.navigate(['/home'])
    }else{
      this.errorMessage = 'Invalid Username or Password'
    }
  }
}
