import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, ReplaySubject, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Column } from 'src/app/models/column.interface';
import { Rows } from 'src/app/models/rows.interface';
import { Track } from 'src/app/models/track.interface';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.scss'],
})
export class HomePageComponent implements AfterViewInit {
  dataLoaded$ = new ReplaySubject();
  tracks: Track[] = [];
  rows: Rows[] = [];
  columns: Column[] = [
    { name: 'Track Name', minWidth: 250 },
    { name: 'Artist Name', minWidth: 250 },
    { name: 'Artist link', minWidth: 250 },
    { name: 'Artist Photo', minWidth: 250 },
  ];
  stream$ = new Observable();
  constructor(private http: HttpService) {}

  ngAfterViewInit(): void {
    this.stream$ = this.http
      .getTracks()

      .pipe(
        tap((t) => {
          this.tracks = t.track;
          for (const track of t.track) {
            {
              this.rows.push({
                trackName: track.name,
                artistName: track.artist.name,
                artistLink: track.artist.url,
                artistPhoto: track.image[0]['#text'],
              });

              this.dataLoaded$.next(true);
            }
          }
        })
      );
  }
}
