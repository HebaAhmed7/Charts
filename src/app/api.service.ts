import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _HttpClient:HttpClient) { }
  token:string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBZG1pbiIsImp0aSI6IjliNGI4NDBiLWY1NWMtNDYzZi1iNmUzLWFlMzE5MDdiOGE4YyIsImVtYWlsIjoiQWRtaW5AZ21haWwuY29tIiwidWlkIjoiYjc0ZGRkMTQtNjM0MC00ODQwLTk1YzItZGIxMjU1NDg0M2U1Iiwicm9sZXMiOiJBZG1pbiIsImV4cCI6MTY0MTEzODIzMSwiaXNzIjoiU2VjdXJlQXBpIiwiYXVkIjoiU2VjdXJlQXBpVXNlciJ9.WRZfRstLfTGRbgNUafFlhdFxL6B2Eh2vR5OcdT6Dl1c'
  getOutBreaksChartData(): Observable<any> {
    let httpHeaders = new HttpHeaders().set('Authorization', "Bearer " + this.token);

    return this._HttpClient.get("https://animals.a3rff.com/api/Animals/GetSemsterNewOutbreaks",
      {
        headers: httpHeaders
      }
    )
  }
  getDeathChartsData(): Observable<any> {
    let httpHeaders = new HttpHeaders().set('Authorization', "Bearer " + this.token);

    return this._HttpClient.get("https://animals.a3rff.com/api/Animals/GetSemsterDeathChart",
      {
        headers: httpHeaders
      }
    )
  }
  getLocationsData(): Observable<any> {
    let httpHeaders = new HttpHeaders().set('Authorization', "Bearer " + this.token);

    return this._HttpClient.get("https://animals.a3rff.com/api/Animals/GetAnimalsLocations",
      {
        headers: httpHeaders
      }
    
    )
  }


}
