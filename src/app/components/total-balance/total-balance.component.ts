import { Component, OnInit } from '@angular/core';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-total-balance',
  templateUrl: './total-balance.component.html',
  styleUrls: ['./total-balance.component.scss']
})
export class TotalBalanceComponent implements OnInit {

  public dotsIcon = faEllipsisH;
  public totalAmount?: number;
  public monthlyPayLimit?: number;
  public paymentDone?: number;
  public paymentDoneInPercentage?: number;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getTotalBalane();
  }

  getTotalBalane() {
    this.dataService.getData().subscribe((response: any) => {
      this.totalAmount = response.balance.total_balance;
      this.monthlyPayLimit = response.balance.monthly_payment_limit;
      this.paymentDone = response.balance.payment_done_so_far;
      this.paymentDoneInPercentage = response.balance.payment_done_percentage;
    })
  }

}
