import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { BaseService } from './service/base.service';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
