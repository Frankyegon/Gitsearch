import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private clientid = '67782741';

  constructor(private http:HttpClient) {
    console.log("service is ready");
    this.username='Frankyegon';
   }

   getProfileInfo(){
     return this.http.get("https://api.github.com/users/"+this.username+"?clientid="+this.clientid)
     //.map(res => res.json());
   }

   getProfileRepos(){
    return this.http.get("https://api.github.com/users/"+this.username+"/repos?clientid="+this.clientid)
    //.map(res => res.json());
  }

  updateProfile(username:string){
    this.username = username;
  }
    
}
