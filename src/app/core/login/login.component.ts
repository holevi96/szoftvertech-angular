import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {RegisterComponent} from '../dialog/register/register.component';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {
    felhasznalonev: '',
    jelszo: ''
  };

  constructor(public dialog: MatDialog, private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
  }

  login(){
    this.apiService.login(this.user).subscribe((token: any) => {
      localStorage.setItem('jwt', token.accessToken);
      this.router.navigate(['/works']);
    });
  }
  register(){
    const dialogRef = this.dialog.open(RegisterComponent, {width: '450px'});
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      this.apiService.register(result).subscribe(resp => {
        alert('Sikeres regisztráció!');
      })
    });
  }
}
