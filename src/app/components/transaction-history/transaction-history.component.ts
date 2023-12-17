import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { faShareSquare, faFilter, faEllipsisH , faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent implements OnInit {

  public exportIcon = faShareSquare;
  public filterIcon = faFilter;
  public query: string = "";
  public transactionHistory:any[] = [];
  public dotsIcon = faEllipsisH;
  public searchIcon = faSearch;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getTransactionHistory();
  }

  getTransactionHistory() {
    this.dataService.getData().subscribe((response: any) => {
      this.transactionHistory = response.transactions;
    })
  }

}