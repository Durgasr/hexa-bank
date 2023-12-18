import { Component, OnInit } from '@angular/core';
import { faThLarge, faUniversity, faList, faChartBar, faCreditCard, faChevronLeft, faChevronUp, faChevronDown, faToggleOff, faCog, faQuestionCircle, faMoon } from '@fortawesome/free-solid-svg-icons';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.scss']
})
export class LeftNavigationComponent implements OnInit {
  public leftArrow = faChevronLeft;
  public arrowUp = faChevronUp;
  public arrowDown = faChevronDown;
  public overviewIcon = faThLarge;
  public listIcon = faList;
  public chartIcon = faChartBar;
  public cardIcon = faCreditCard;
  public settingsIcon = faCog;
  public helpIcon = faQuestionCircle;
  public darkModeIcon = faMoon;
  public toggleIcon = faToggleOff;
  public bankIcon = faUniversity;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }


}
