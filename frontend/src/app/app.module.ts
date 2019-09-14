import { DataService } from './data-service.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchesComponent } from './components/matches/matches.component';
import { MaterialModule } from './material.module';
import { NewMatchComponent } from './components/new-match/new-match.component';
import { ShowRecentComponent } from './components/show-recent/show-recent.component';

@NgModule({
  declarations: [AppComponent, MatchesComponent, NewMatchComponent, ShowRecentComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
