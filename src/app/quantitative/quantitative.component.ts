import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ApiService } from '../api.service';
Chart.register(...registerables);

@Component({
  selector: 'app-quantitative',
  templateUrl: './quantitative.component.html',
  styleUrls: ['./quantitative.component.scss']
})
export class QuantitativeComponent implements OnInit {

  semster: any[] = []
  killedAndDisposedOf: any[] = []
  death: any[] = []
  cases: any[] = []
  constructor(private _ApiService: ApiService) {
    this._ApiService.getDeathChartsData().subscribe((res) => {
      console.log(res)
      res.data.forEach((ele: any) => {
        this.semster.push(ele.semster);
        this.killedAndDisposedOf.push(ele.killedAndDisposedOf);
        this.death.push(ele.death);
        this.cases.push(ele.cases);

      });
      const ctx = document.getElementById('myChart')! as HTMLCanvasElement;
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.semster,
          datasets: [
            {
              label: 'killed And DisposedOf',
              data: this.killedAndDisposedOf,
              borderWidth: 3,
              borderColor:"rgb(221, 204, 119)",
            },
            {
              label: 'Death',
              data: this.death,
              borderWidth: 3,
              borderColor:"rgb(68, 119, 170)",
            },
            {
              label: 'Cases',
              data: this.cases,
              borderWidth: 3,
              borderColor:"rgb(17, 119, 51)",
            }
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    });
  }

  ngOnInit(): void {
  }

}
