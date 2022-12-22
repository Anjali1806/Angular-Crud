import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
User:User
  constructor(private route:ActivatedRoute) { 
    this.User=new User();
    this.route.params.subscribe((res) =>{
      this.User.userName=res['id']
    });
  }

  ngOnInit(): void {
debugger;
    const oldRecords = localStorage.getItem('userList');
    if(oldRecords !== null){
      const userList =JSON.parse(oldRecords);
      const currentUser = userList.find((m:any) => m.userName == this.User.userName);
      if(currentUser !== undefined){
        this.User.userEmail = currentUser.userEmail;
        this.User.userMobile = currentUser.userMobile;
        this.User.userPassword = currentUser.userPassword;
      }
  }
}

  updateUser(){
    debugger;
     const oldRecords = localStorage.getItem('userList'); 
     if(oldRecords !== null){
       const userList =JSON.parse(oldRecords);
       userList.splice(userList.findIndex((a:any) => a.userName == this.User.userName),1);
       userList.push(this.User);
       localStorage.setItem('userList',JSON.stringify(userList));
       alert("User Info Updated successfully!!");
       
   }
   }
 }


