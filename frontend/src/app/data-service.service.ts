import { AddMatch } from './components/new-match/adddata';
import { Match } from './components/matches/match';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  getMatches(): Observable<Match[]> {
    return this.http.get<Match[]>(`${this.url}/api/matches`);
  }

  addMatch(newMatch: AddMatch[]): Observable<AddMatch[]> {
    return this.http
      .post<AddMatch[]>(`${this.url}/api/matches/add`, newMatch, httpOptions)
      .pipe(
        tap((match: AddMatch[]) =>
          console.log(`data inserted = ${JSON.stringify(match)}`)
        )
      );
  }
}
