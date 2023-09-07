import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { user } from 'src/app/interfaces/user';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userName: string = '';
  password: string = '';
  loading: boolean = false;

  constructor(private toastr: ToastrService,
    private _userService: UserService,
    private router: Router,
    private _errorService: ErrorService
  ) { }

  login() {
    //Validar que el usuario ingrese datos
    if (this.userName == '' || this.password == '') {
      this.toastr.error('Todos los Campos son Obligatorios', 'Error');
      return;
    }
    //Crear el body
    const user: user = {
      userName: this.userName,
      password: this.password
    }
    this.loading = true;

    this._userService.login(user).subscribe({

      next: (token) => {
        localStorage.setItem('token', token);
        this.router.navigate(['/dashboard'])
      },
      error: (e: HttpErrorResponse) => {
        this._errorService.msjError(e);
        this.loading = false;
      }
    });

  }
}
