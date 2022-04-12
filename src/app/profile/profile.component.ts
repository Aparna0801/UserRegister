import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   user= {} as User

  constructor(private http:UserServiceService,private router: Router) { 


  }

  ngOnInit(): void {
    this.http.getData("https://mocki.io/v1/611a3036-4420-48a5-b8da-9b461853cdd2").subscribe(res=>{
      console.log(res)
      this.user = res;
    })    
  }

}

