import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  form: FormGroup = new FormGroup({});
  focused = false;
  tracks: any;
  stream$ = new Subject<any>();

  tracks$ = this.stream$.pipe(debounceTime(2500), distinctUntilChanged());

  constructor(private fB: FormBuilder, private http: HttpService) {
    this.form = this.fB.group({
      search: '',
    });
  }

  onFocus(): void {
    this.focused = true;
  }

  onBlur(): void {
    this.focused = false;
  }

  subm(): void {
    if (!this.form.controls.search.value) {
      return;
    }
    this.http.searchMethod(this.form.controls.search.value).subscribe((t) => {
      this.tracks = t.results.trackmatches.track;
    });
  }
}
