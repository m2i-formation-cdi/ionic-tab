import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public userList:Array<any> = [];

  constructor(private http: HttpClient) { 

    let url = "https://randomuser.me/api?results=20";

    let req = this.http.get(url);

    req.subscribe(
      (data:any)=> {
        console.log(data);
        this.userList = data.results;
      }
    )
  }

}
