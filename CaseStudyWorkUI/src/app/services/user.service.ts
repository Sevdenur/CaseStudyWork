import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  apiUrl='http://localhost:35163/api/'
  constructor(private httpClient:HttpClient) { }

  getAllUsers(): Observable<ListResponseModel<User>>{
    let newPath=this.apiUrl + "users/getall"
    return this.httpClient.get<ListResponseModel<User>>(newPath)
  }

  getUserById(id:number):Observable<SingleResponseModel<User>>{
    let newPath=this.apiUrl +  "users/getbyid?id=" + id
    return this.httpClient.get<SingleResponseModel<User>>(newPath)
  }

  addUser(user:User):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"users/add", user)
  }

  deleteUser(user:User):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "users/delete", user)
  }
 
  updateUser(user:User):Observable<ResponseModel> {   
    return this.httpClient.post<ResponseModel>(this.apiUrl + "users/update", user)
  }

}


