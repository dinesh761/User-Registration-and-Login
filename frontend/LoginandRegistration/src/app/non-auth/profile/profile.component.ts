import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/users/register.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public registerService: RegisterService) { }

  ngOnInit(): void {
  }

}
