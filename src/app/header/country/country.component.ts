import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  country: any[] = []

  constructor(private _ApiService: ApiService) {
    this._ApiService.getLocationsData().subscribe((res)=>{
      console.log(res);
      res.data.forEach((ele:any) => { 
        this.country.push(ele.country);
      });
    });
   }

  ngOnInit(): void {
  }

}
