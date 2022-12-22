import { Component, OnInit } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
User:User;

  constructor() { 
    this.User = new User;
  }

  ngOnInit(): void {
  } 

  getNewUserId(){
    debugger;
    const oldRecords = localStorage.getItem('userList');
    if(oldRecords !== null){
      const userList =JSON.parse(oldRecords);
      return userList.length+1;
    } else {
      return 1;
    }
  }

  saveUser(){
   debugger;
    const latestId = this.getNewUserId();
    const oldRecords = localStorage.getItem('userList');
    if(oldRecords !== null){
      const userList =JSON.parse(oldRecords);
      userList.push(this.User);
      localStorage.setItem('userList',JSON.stringify(userList));
      alert("User Info Saved successfully!!");
  }else{
    const userInfo = [];
    userInfo.push(this.User);
    localStorage.setItem('userList',JSON.stringify(userInfo));
    alert("User Info Saved successfully!!");
  }
}
}