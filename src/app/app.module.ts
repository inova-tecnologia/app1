import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { PanelComponent } from './panel/panel.component';
import { TryComponent } from './try/try.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  declarations: [  
    AppComponent,
    TopComponent,
    PanelComponent,
    TryComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
