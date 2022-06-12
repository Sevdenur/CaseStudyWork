import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  updateUserForm=new FormGroup ({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  })
  user:User

  constructor(private activatedRoute:ActivatedRoute,
    private userService:UserService,
    private formBuilder:FormBuilder,
    private toastr:ToastrService) { }


  ngOnInit(): void { 
    this.activatedRoute.params.subscribe((params)=>{
      if(params['id']) {
        this.createUpdateUserForm(params['id']);
      }
    });
  }
 
  createUpdateUserForm(id:number) {
    this.userService.getUserById(id).subscribe((response)=>{
      this.user=response.data
      this.updateUserForm.setValue({
        firstName:this.user.firstName,
        lastName:this.user.lastName
      });
    });
  }

  updateUser(){
    if(this.updateUserForm.valid) {
      let userModel = Object.assign({}, this.updateUserForm.value)
      userModel.id=this.user.id
      this.userService.updateUser(userModel).subscribe(response=>{
        console.log(response)
        this.toastr.success("Updated")
      });
    }this.toastr.error("Operation Failed!")
  }
}
