import { MatchesComponent } from './components/matches/matches.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewMatchComponent } from './components/new-match/new-match.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'matches',
    component: MatchesComponent
  },
  { path: 'add', component: NewMatchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [MatchesComponent, NewMatchComponent];
