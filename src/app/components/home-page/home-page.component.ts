import { ChangeDetectionStrategy } from '@angular/compiler/src/compiler_facade_interface';
import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  ContentChild,
  DoCheck,
  OnChanges,
  Renderer2,
} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReplaySubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Rows } from 'src/app/models/rows.interface';
import { Track } from 'src/app/models/track.interface';
import { HttpService } from 'src/app/services/http.service';
import { ChartMethod } from '../../methods/chartMethod';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit, AfterViewInit {
  @ContentChild('artistName') artName: any;
  dataLoaded$ = new ReplaySubject();
  chartMethod: ChartMethod = new ChartMethod();
  tracks: Track[] = [];
  scrollBar: boolean = false;
  tableWidth: number = 50;
  rows: Rows[] = [];
  columns = [
    { name: 'Track Name', minWidth: 250 },
    { name: 'Artist Name', minWidth: 250 },
    { name: 'Artist link', minWidth: 250 },
    { name: 'Artist Photo', minWidth: 250 },
  ];
  test: any;
  constructor(
    private http: HttpService,
    private changeDetector: ChangeDetectorRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.test = this.http
      .chartMethod(this.chartMethod.getTopTracks)

      .subscribe((t) => {
        this.tracks = t.track;
        for (const track of t.track) {
          this.rows.push({
            trackName: track.name,
            artistName: track.artist.name,
            artistLink: track.artist.url,
            artistPhoto: track.image[0]['#text'],
          });

          this.dataLoaded$.next(true);
        }
      });
  }

  ngAfterViewInit(): void {
    if (document.body.clientWidth < 600) {
      this.scrollBar = true;
      this.tableWidth = 100;
    } else {
      this.scrollBar = false;
      this.tableWidth = 50;
    }
  }
}
