import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { LogInData } from '../../model/logInData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isFormInvalid = false;
  areCredentialsInvalid = false;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(logInForm: NgForm) {
    if (!logInForm.valid) {
      this.isFormInvalid = true;
      this.areCredentialsInvalid = false;
      return;
    }
    this.checkCredentials(logInForm);
  }

  private checkCredentials(logInForm: NgForm) {
    const logInData = new LogInData(logInForm.value.email, logInForm.value.password);
    if (!this.authenticationService.authenticate(logInData)) {
      this.isFormInvalid = false;
      this.areCredentialsInvalid = true;
    }
  }
}
