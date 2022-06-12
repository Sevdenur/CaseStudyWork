import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUserForm: FormGroup;
  constructor(private activatedRoute:ActivatedRoute,
    private userService:UserService,
    private formBuilder:FormBuilder,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.createUserAddForm();
  }

  createUserAddForm(){
    this.addUserForm=this.formBuilder.group({
      firstName:[""],
      lastName:[""]
    })
  }

  addUser(){
    if(this.addUserForm.valid) {
      let userModel = Object.assign({}, this.addUserForm.value)
      this.userService.addUser(userModel).subscribe(response=>{
        console.log(response)
        this.toastr.success("User added to the system")
      })
    }this.toastr.error("Operation Failed!")
  }
}
