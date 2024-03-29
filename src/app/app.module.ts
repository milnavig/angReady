import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
//import { MyCashComponent } from './my-cash/my-cash.component';
//import { AmountScaleComponent } from './amount-scale/amount-scale.component';
import { InfoFormPanelComponent } from './info-form-panel/info-form-panel.component';
//import { PersonalInfoComponent } from './personal-info/personal-info.component';
//import { IncomeInfoComponent } from './income-info/income-info.component';
//import { InvestmentInfoComponent } from './investment-info/investment-info.component';
//import { SliderComponent } from './slider/slider.component';
import { LearnInfoComponent } from './learn-info/learn-info.component';
import { ArendaInfoComponent } from './arenda-info/arenda-info.component';
import { BuyInfoComponent } from './buy-info/buy-info.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TabComponent,
    //MyCashComponent,
    //AmountScaleComponent,
    InfoFormPanelComponent,
    //PersonalInfoComponent,
    //IncomeInfoComponent,
    //InvestmentInfoComponent,
    //SliderComponent,
    LearnInfoComponent,
    ArendaInfoComponent,
    BuyInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
