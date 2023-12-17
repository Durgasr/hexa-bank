import { Component, OnInit } from '@angular/core';
import { faEllipsisH, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { DataService } from 'src/app/services/data.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-money-statistics',
  templateUrl: './money-statistics.component.html',
  styleUrls: ['./money-statistics.component.scss']
})
export class MoneyStatisticsComponent implements OnInit {

  public dotsIcon = faEllipsisH;
  public moneyDetails: any[] =[];
  public lineChart = faChartLine;


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getMoneyStatisticsData();
    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Income',
            data: [42, 21, 35, 47, 37, 27, 33, 48, 30, 19, 28, 39],
            backgroundColor: "#9db488",
            borderColor: "#9db488",
            borderWidth: 0,
            borderRadius: 20,
            barPercentage: 0.6,
            categoryPercentage: 0.6
          },
          {
            label: 'Investment',
            data: [12, 10, 16, 23, 13, 11, 14, 16, 10, 7, 15, 9],
            backgroundColor: "#726da8",
            borderColor: "#726da8",
            borderWidth: 0,
            borderRadius: 20,
            barPercentage: 0.6,
            categoryPercentage: 0.6
          },
          {
            label: 'Expense',
            data: [31, 16, 30, 28, 26, 18, 26, 32, 20, 15, 24, 18],
            backgroundColor: "#0d0a40",
            borderColor: "#0d0a40",
            borderWidth: 0,
            borderRadius: 20,
            barPercentage: 0.6,
            categoryPercentage: 0.6
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              usePointStyle: true,
              pointStyle: 'circle',
              pointStyleWidth: 7,
              useBorderRadius: true,
              boxHeight:5,
              color: "#0d0a40",
              font:{
                weight:'bold'
              }
            },
            position: 'bottom'
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              // Include a dollar sign in the ticks
              callback: function (value, index, values) {
                return value + "k";
              }
            }
          },
        }
      }
    });
  }


  getMoneyStatisticsData() {
    this.dataService.getData().subscribe((data: any) => {
      console.log(data);
      this.moneyDetails = Object.keys(data.money_statistics).map(key => ({ type: key, value: data.money_statistics[key] }))
    })
  }









}
