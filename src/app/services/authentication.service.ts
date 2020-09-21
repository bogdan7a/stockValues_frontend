import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LogInData } from '../model/logInData';
import { User } from '../model/user';
import { BackendConnectionService } from './backend-connection.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user: User;

  private readonly mockedUser = new LogInData('admin@mail.com', 'test');
  private readonly mockedUser2 = new LogInData('user@mail.com', 'test');
  
  isAuthenticated = false;

  constructor(private router: Router, private backendConnectionService: BackendConnectionService) { }

  authenticate(logInData: LogInData): boolean {
    if(this.checkCredentials(logInData)){
      if(logInData.getEmail() === this.mockedUser.getEmail()) {
        this.isAuthenticated = true;
      this.router.navigate(['admin']);
      }else if(logInData.getEmail() === this.mockedUser2.getEmail()){
        this.isAuthenticated = true;
        this.router.navigate(['user']);
      }
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  private checkCredentials(logInData: LogInData): boolean {
    return this.checkEmail(logInData.getEmail()) && this.checkPassword(logInData.getPassword());
  }

  private checkEmail(email: string): boolean {
    return email === this.mockedUser.getEmail() || email === this.mockedUser2.getEmail();
  }

  private checkPassword(password: string): boolean {
    return password === this.mockedUser.getPassword() || password === this.mockedUser2.getPassword();
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }
}