import { Component, ViewChild, OnInit } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};

interface StatisticsBy {
  name: string;
  code: string;
}

@Component({
  selector: 'app-chartuid',
  templateUrl: './chartuid.component.html',
  styleUrl: './chartuid.component.scss'
})
export class ChartuidComponent implements OnInit {

  statisticsBy: StatisticsBy[] | undefined;

  selectedStatisticsBy: StatisticsBy | undefined;

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;

  constructor(){

  }

  ngOnInit(): void {
    this.statisticsBy = [
      { name: 'سنويا', code: 'Y' },
      { name: 'شهريا', code: 'M' },
      { name: 'يوميا', code: 'D' }
    ];
    this.selectedStatisticsBy = this.statisticsBy[0];


    this.chartOptions = {
      series: [
        {
          name: "إستخدام",
          data: [31, 10, 40, 28, 51, 42, 109, 100, 250, 150, 50, 80 ]
        },
      ],
      chart: {
        height: 200,
        width: '100%',
        type: "area",
        toolbar: {
          show: false
        },
        background: '#fff',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        show: true,
        labels: {
          format: 'MMM'
        },
        type: "datetime",
        categories: [
          "January 2023",
          "February 2023",
          "March 2023",
          "April 2023",
          "May 2023",
          "June 2023",
          "July 2023",
          "August 2023",
          "September 2023",
          "October 2023",
          "November 2023",
          "December 2023",
        ],
        tooltip: {
          enabled: false
        },
      },
      yaxis: {
        show: false,
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      tooltip: {
        enabled: true,
        style: {
          background: "#000"
        },
        x: {
            show: false,
        },
        marker: {
            show: true,
        },
        theme: "dark",
      },
      colors: ["#8a74f9"],
    };
  }

}
