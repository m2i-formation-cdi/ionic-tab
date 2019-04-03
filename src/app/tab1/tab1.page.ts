import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public userList:Array<any> = [];

  public genderChoice:string = 'female';

  public nationalityChoice:string[] = ['fr'];

  constructor(private http: HttpClient) { 
    this.loadData(false, null);
  }


  private loadData(addBeforeContent:boolean, even) {
    let url = "https://randomuser.me/api";
    let requestParams = new HttpParams()
      .set('results', '10')
      .set('gender', this.genderChoice)
      .set('nat', this.nationalityChoice.join(','));
    let req = this.http.get(url, { params: requestParams });
    req.subscribe((data: any) => {
      if(addBeforeContent){
        this.userList = data.results.concat(this.userList);
      }else {
        this.userList = this.userList.concat(data.results)
      }

      console.log(this.userList);

      if(even){
        even.target.complete();
      }
    });
  }

  public loadMoreData(even){
    this.loadData(false, even)
  }

  public refreshData(even){
    this.loadData(true, even);
  }
}
