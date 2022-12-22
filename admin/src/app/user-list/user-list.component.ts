import { Component, OnInit } from '@angular/core';
import { User } from '../user';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList : User[];
  
  constructor() {
    this.userList = [];
   }

  ngOnInit(): void {
    //debugger; 
    const records = localStorage.getItem('userList');
    if(records !== null){
      this.userList =JSON.parse(records);
  }
}

deleteUser(id:any){
 

  const oldRecords = localStorage.getItem('userList'); 
  if(oldRecords !== null){
    const userList =JSON.parse(oldRecords);
    userList.splice(userList.findIndex((a:any) => a.userName == id),1);
   
    localStorage.setItem('userList',JSON.stringify(userList));
    
    alert("User Info Deleted successfully!!");
}
}
}