import { DataService } from './../../data-service.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from '../matches/match';
import { DataSource } from '@angular/cdk/table';
@Component({
  selector: 'app-show-recent',
  templateUrl: './show-recent.component.html',
  styleUrls: ['./show-recent.component.css']
})
export class ShowRecentComponent implements OnInit {
  // tslint:disable-next-line: no-use-before-declare
  dataSource = new MatchDataSource(this.dataService);
  displayedColumns = ['Id', 'Champion', 'Role', 'Season'];

  constructor(private dataService: DataService) {}

  ngOnInit() {}
}

export class MatchDataSource extends DataSource<any> {
  constructor(private dataService: DataService) {
    super();
  }
  connect(): Observable<Match[]> {
    return this.dataService.getRecent();
  }
  disconnect() {}
}

