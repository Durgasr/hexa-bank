import { Component, OnInit } from '@angular/core';
import { faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeSquare, faBell, faUniversity, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {


  public hideTopNaviBar = false;

  public faTimes = faTimes;
  public searchIcon = faSearch;
  public inboxIcon = faEnvelopeSquare;
  public bellIcon = faBell;
  public bankIcon = faUniversity;
  public leftArrow = faChevronLeft;

  constructor() { }

  ngOnInit(): void {
  }


  hideTopNavBar() {
    this.hideTopNaviBar = true;
  }

}
