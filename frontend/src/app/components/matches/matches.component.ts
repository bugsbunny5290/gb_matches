import { DataService } from './../../data-service.service';
import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from './match';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  // tslint:disable-next-line: no-use-before-declare
  dataSource = new MatchDataSource(this.dataService);
  displayedColumns = ['Id', 'Champion', 'Role', 'Season'];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // this.dataService.getMatches().subscribe(match => (this.matches = match));
  }
}

export class MatchDataSource extends DataSource<any> {
  constructor(private dataService: DataService) {
    super();
  }
  connect(): Observable<Match[]> {
    return this.dataService.getMatches();
  }
  disconnect() {}
}
