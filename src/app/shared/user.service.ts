import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb:FormBuilder, private http:HttpClient) { }
  readonly BaseURI = 'https://localhost:44322';

  formModel =  this.fb.group({
    Email: ['', Validators.email],
    Password: ['', Validators.required]
  });

  register(){
  var body={
      Email: this.formModel.value.Email,
      Password: this.formModel.value.Password
    }
    return this.http.post(this.BaseURI+'/register',body);
  }

  login(formData) {
    return this.http.post(this.BaseURI + '/login', formData);
  }

  getUserString(){
    //var tokenHeader = new HttpHeaders({'Authorization':'Bearer'+localStorage.getItem('token')})
    //return this.http.get(this.BaseURI+'/string',{headers: tokenHeader});
    return this.http.get(this.BaseURI+'/string');
  }

}