import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare, faPaperPlane, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt, faEllipsisH, faTv, faBicycle, faTaxi } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  public arrowLeftIcon = faChevronLeft;
  public arrowRightIcon = faChevronRight;
  public topUpIcon = faPlusSquare;
  public transferIcon = faPaperPlane;
  public withdrawalIcon = faMoneyBillAlt;
  public mobileIcon = faMobileAlt;
  public dotsIcon = faEllipsisH;
  public tvIcon = faTv;
  public bicycleIcon = faBicycle;
  public taxiIcon = faTaxi;

  constructor() { }

  ngOnInit(): void {
  }

}
