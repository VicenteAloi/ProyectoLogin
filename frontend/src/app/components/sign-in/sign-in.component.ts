import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { combineLatest } from 'rxjs';
import { user } from 'src/app/interfaces/user';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  userName: string = '';
  password: string = '';
  confirmPassword: string = '';
  loading: boolean = false;

  constructor(private toastr: ToastrService,
    private _userService: UserService,
    private router: Router,
    private _errorService: ErrorService) {

  }

  addUser() {
    //Validar que los campos no sean vacio
    if (this.userName == '' || this.password == '' || this.confirmPassword == '') {
      this.toastr.error('Todos los Campos son Obligatorios', 'Error');
      return;
    }

    //Validar si las password sean iguales
    if (this.password != this.confirmPassword) {
      this.toastr.error('Las Password Ingresadas son Distintas', 'Error');
      return;
    }

    //Crear el usuario
    const user: user = {
      userName: this.userName,
      password: this.password
    }
    this.loading = true;
    this._userService.signIn(user).subscribe({
      next: (v) => {
        this.loading = false;
        this.toastr.success(`${this.userName} Registrado Exitosamente`, 'Usuario Registrado');
        this.router.navigate(['/login']);
      },
      error: (e: HttpErrorResponse) => {
        this._errorService.msjError(e);
        this.loading = false;
      }
    })

  }


}
