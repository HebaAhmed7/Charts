import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';


@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss']
})
export class WorldComponent implements OnInit {
  worldRegion: any[] = []
 
  constructor(private _ApiService: ApiService) {
    this._ApiService.getLocationsData().subscribe((res)=>{
      console.log(res);
      res.data.forEach((ele:any) => { 
        this.worldRegion.push(ele.worldRegion);
       
      });
    });
   }

  ngOnInit(): void {
  }

}
