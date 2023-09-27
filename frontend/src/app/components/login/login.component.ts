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
  password: string = '';
  email: string = '';
  dni: string = '';
  name: string = '';
  surname: string = '';
  isAdmin: boolean = false;
  codAdmin: string = '';
  adminLogin: boolean = false;
  loading: boolean = false;

  constructor(private toastr: ToastrService,
    private _userService: UserService,
    private router: Router,
    private _errorService: ErrorService
  ) { }

  login() {
    //Validar que el usuario ingrese datos
    if (this.email == '' || this.password == '') {
      this.toastr.error('Todos los Campos son Obligatorios', 'Error');
      return;
    }


    //Crear el body
    const user: any = {
      dni: this.dni,
      password: this.password,
      email: this.email,
      name: this.name,
      surname: this.surname,
      isAdmin: this.isAdmin,
      adminLogin: this.adminLogin
    }

    this.loading = true;

    this._userService.login(user).subscribe({
      next: (token) => {
        localStorage.setItem('token', token);
        if (this.adminLogin) {
          this.router.navigate(['/admin'])
        } else {
          this.router.navigate(['/dashboard'])
        }

      },
      error: (e: HttpErrorResponse) => {
        this._errorService.msjError(e);
        this.loading = false;
      }
    });

  }

  // login2() {
  //   //Validar que el usuario ingrese datos
  //   if (this.email == '' || this.password == '') {
  //     this.toastr.error('Todos los Campos son Obligatorios', 'Error');
  //     return;
  //   }
  //   this.loading = true;

  //   this._userService.getUsers().subscribe(data => {
  //     const users = data;
  //     users.forEach(element => {
  //       if(element.email==this.email && element.password==this.password && element.isAdmin==this.adminLogin){

  //       }
  //       });
  //   });




}




// next: (token) => {
//   localStorage.setItem('token', token);
// },
//   error: (e: HttpErrorResponse) => {
//     this._errorService.msjError(e);
//     this.loading = false;
//   }