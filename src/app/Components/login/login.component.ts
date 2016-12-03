import { Component, OnInit } from '@angular/core';
import { LoginService, LocalStorageService } from '../../Services';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage:string = "";
  constructor(private _loginService: LoginService,private _localStorageService: LocalStorageService, private router: Router) {
  }

  ngOnInit() {
    if(this._loginService.isUserLoguedIn())
      this.router.navigate(['Dashboard']);

    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  onLogin(){

    this._loginService.login(this.loginForm.value.username,this.loginForm.value.password)
      .subscribe((res)=>{
        this.errorMessage = "";
        this._loginService.startSession(res,this.loginForm.value.username);
        this.router.navigate(['Dashboard']);
      },
        (error)=>{
          console.log(error);
          if(error.error == "invalid_grant"){
            this.errorMessage = "Nombre de usuario/contraseña incorrecto";
          }
        });
  }


}
