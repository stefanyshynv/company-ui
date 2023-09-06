import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'company-ui';
  users = Array<object>;

  constructor(private http: HttpClient) { }

    ngOnInit() {      
        // Simple GET request with response type <any>
        this.http.get<any>('https://company.railway.internal/users').subscribe(data => {
            this.users = data;
        })
    }
}
