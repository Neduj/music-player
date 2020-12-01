import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Rows } from 'src/app/models/rows.interface';
import { Track } from 'src/app/models/track.interface';
import { ChartMethod } from '../../methods/chartMethod';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  chartMethod: ChartMethod = new ChartMethod();
  tracks: Track[] = [];
  rows: Rows[] = [];
  check = false;
  columns = [
    { name: 'Track Name', minWidth: 250 },
    { name: 'Artist Name', minWidth: 250 },
    { name: 'Artist link', minWidth: 250 },
    { name: 'Artist Photo', minWidth: 250 },
  ];

  @ViewChild('table') table: any;
  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http.chartMethod(this.chartMethod.getTopTracks).subscribe((t) => {
      const i = 1;
      this.tracks = t.track;
      for (const iterator of t.track) {
        this.rows.push({
          trackName: iterator.name,
          artistName: iterator.artist.name,
          artistLink: iterator.artist.url,
          artistPhoto: iterator.image[0]['#text'],
        });
        console.log(this.rows);
        this.check = true;
      }
    });
  }
}
