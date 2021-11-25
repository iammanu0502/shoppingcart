import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Userlist } from '../User-list';
import { UserListService } from '../user-list.service';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userlist: Userlist[];
  displayedColumns: string[] = ['username','email_id','phone_no','password','confirm_password','actions'];
  dataSource: MatTableDataSource<Userlist>;
  constructor(private router: Router, private userlistservice:UserListService) { }

  ngOnInit(): void {
    this.getusers();
  }

  private getusers(){
    this.userlistservice.getUserList().subscribe(data => {
      this.userlist = data;
      this.dataSource = new MatTableDataSource(this.userlist);
    });
  }

  userDetails(id: number){
    this.router.navigate(['users', id]);
  }

  updateUser(id: number){
    this.router.navigate(['users', id]);
  }

  deleteUser(id: number){
    this.userlistservice.deleteUser(id).subscribe( data => {
      console.log(data);
      this.getusers();
    })

  }
}

