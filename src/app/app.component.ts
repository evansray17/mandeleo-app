import { Component, OnInit } from '@angular/core';
import { RecordsServiceService } from './records-service.service';
import { user }  from './user.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  users$ : user[];
  constructor(private myservice: RecordsServiceService) {}
  
  
  ngOnInit() {
    return this.myservice.getUsers()
    .subscribe(data => this.users$ = data)
  }
}
