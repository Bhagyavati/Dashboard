import { Component, OnInit, HostBinding } from '@angular/core';
import {Chart} from  'chart.js';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  myChart;
  myChart1;
  constructor() { }
  @HostBinding('class') classes = 'col col-xl-8 col-lg-10';

  ngOnInit() {
      var canvasP = <HTMLCanvasElement> document.getElementById("pieChart");

      var ctxP = canvasP.getContext("2d");
      this.myChart = new  Chart(ctxP, {
      type: 'bar',
      data: {
      labels: ["phani","pabu","xyz","abc","ddd","eee","fff","ggg"],
      datasets: [{
      data: [50,70,4,6,8,7,70,45],
       backgroundColor: ["#008080", "#008080", "#008080", "#008080", "#008080", "#008080", "#008080","#008080"]
      // hoverBackgroundColor: ["#B2EBF2", "#FFCCBC", "#4DD0E1", "#FF8A65", "#00BCD4", "#FF5722", "#0097A7"]
      }]
      },
      options:
      {

          legend: {
          display: true,
          position: "right"
        }

      }
      });

        }

}
