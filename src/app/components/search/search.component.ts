import { Component, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { Observable, ReplaySubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Column } from 'src/app/models/column.interface';
import { Rows } from 'src/app/models/rows.interface';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnDestroy {
  @ViewChild(MatAutocompleteTrigger)
  autoComplete!: MatAutocompleteTrigger;
  form: FormGroup = new FormGroup({});
  focused = false;
  tracks: any = [];
  rows: Rows[] = [];
  columns: Column[] = [
    { name: 'Track Name', minWidth: 250 },
    { name: 'Artist Name', minWidth: 250 },
  ];
  displayTable$ = new ReplaySubject();

  constructor(private fB: FormBuilder, private http: HttpService) {
    this.form = this.fB.group({
      search: '',
    });
  }

  onFocus(): void {
    this.focused = true;
    this.searcher();
  }

  onBlur(): void {
    this.focused = false;
    if (this.form.controls.search.value) {
      this.displayTable$.next(true);
    } else {
      this.displayTable$.next(false);
    }
  }

  searcher(ev?: KeyboardEvent) {
    console.log(this.form.controls.search.value);

    if (!this.form.controls.search.value) {
      this.tracks = [];
      this.rows = [];
      return;
    }

    if (ev && ev.key === 'Enter') {
      this.autoComplete.closePanel();
      this.displayTable$.next(true);
    }

    return this.http
      .search(this.form.controls.search.value)
      .pipe(
        tap((t) => {
          this.tracks = t.results.trackmatches.track;
          this.rows = [];
          for (const track of this.tracks) {
            this.rows.push({
              artistName: track.artist,
              trackName: track.name,
              artistLink: '',
              artistPhoto: '',
            });
          }
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.searcher()?.unsubscribe();
  }
}
