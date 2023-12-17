import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftNavigationComponent } from './components/left-navigation/left-navigation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { CardsComponent } from './components/cards/cards.component';
import { TotalBalanceComponent } from './components/total-balance/total-balance.component';
import { MoneyStatisticsComponent } from './components/money-statistics/money-statistics.component';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';


@NgModule({
  declarations: [
    AppComponent,
    LeftNavigationComponent,
    TopNavigationComponent,
    CardsComponent,
    TotalBalanceComponent,
    MoneyStatisticsComponent,
    TransactionHistoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
