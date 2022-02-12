import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import { StartElementComponent } from './start-element/start-element.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { LandingGraphComponent } from './landing-graph/landing-graph.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { EditScreenComponent } from './edit-screen/edit-screen.component';
import {OverlayServiceService} from "./overlay-service.service";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatSelectModule} from "@angular/material/select";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { FlightInfoComponent } from './flight-info/flight-info.component';
import { ActiveScreenComponent } from './active-screen/active-screen.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
@NgModule({
  declarations: [
    AppComponent,
    StartElementComponent,
    StartScreenComponent,
    LandingGraphComponent,
    LoadingScreenComponent,
    EditScreenComponent,
    FlightInfoComponent,
    ActiveScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  providers: [OverlayServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
