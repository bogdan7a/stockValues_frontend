import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/user';
import { BackendConnectionService } from 'src/app/services/backend-connection.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  email: string;
  password: string;
  role: string;
  users: User[];

  constructor(private backendConnectionService: BackendConnectionService) { }

  ngOnInit(): void {
    this.email = '';
    this.password = '';
    this.role = 'user';
    this.getUsers();
  }
  
  getUsers() {
    this.backendConnectionService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  createUser(){
    let newUser = {
      email: this.email,
      password: this.password,
      role: this.role
    }
    this.backendConnectionService.addUser(newUser).subscribe();
    this.getUsers();
  }

  deleteUser(user: User) {
    this.users = this.users.filter(u => u.id !== user.id);
    this.backendConnectionService.deleteUser(user).subscribe();
  }
}
