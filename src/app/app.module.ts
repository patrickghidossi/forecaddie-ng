import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LandComponent } from './land/land.component';
import { AuthComponent } from './auth/auth.component';
import { AboutComponent } from './land/about.component';

import { AuthService } from "./auth/auth.service";
import { ApiService } from "./api.service";

@NgModule({
  declarations: [
    AppComponent,
    LandComponent,
    AuthComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    AuthService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
