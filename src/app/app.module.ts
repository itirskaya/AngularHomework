import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { TemperatureWidgetComponent } from './temperature-widget/temperature-widget.component';
import { StatisticWidgetComponent } from './statistic-widget/statistic-widget.component';
import { CopyRightComponent } from './copy-right/copy-right.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainMenuComponent,
    TemperatureWidgetComponent,
    StatisticWidgetComponent,
    CopyRightComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
