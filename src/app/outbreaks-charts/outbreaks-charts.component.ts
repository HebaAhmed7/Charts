import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ApiService } from '../api.service';
Chart.register(...registerables);
@Component({
  selector: 'app-outbreaks-charts',
  templateUrl: './outbreaks-charts.component.html',
  styleUrls: ['./outbreaks-charts.component.scss'],
})
export class OutbreaksChartsComponent implements OnInit {
  chartsData: any[] = []
  cha: any[] = []
  constructor(private _ApiService: ApiService) {
    this._ApiService.getOutBreaksChartData().subscribe((res) => {
      res.data.forEach((ele: any) => {
        this.chartsData.push(ele.semster);
        this.cha.push(ele.numberOfOutbreaks);
      });
      const ctx = document.getElementById('myChart')! as HTMLCanvasElement;
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.chartsData,
          datasets: [
            {
              label: 'Outbreak',
              data: this.cha,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
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

  ngOnInit(): void {}
}
