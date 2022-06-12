import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {ActivatedRoute} from "@angular/router";
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  updateUserForm: FormGroup
  users:User[];
  user:User;
  dataLoaded=false;
  constructor(private activatedRoute:ActivatedRoute, private userService:UserService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(response=>{
      this.users=response.data    
      this.dataLoaded=true
    })
  }

  deleteUser(user:User){   
    this.userService.deleteUser(user).subscribe(response=>{
      this.getAllUsers();
      this.toastr.error("USer deleted from system")
    })
  }

}
