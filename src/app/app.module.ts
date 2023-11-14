import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TabsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
