import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { Tracks } from 'src/app/models/tracks.interface';
import { environment } from 'src/environments/environment';
import { debounceTime, map, mergeMap, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  chartMethod(method: string): Observable<Tracks> {
    return this.http
      .get<Tracks>(
        `http://ws.audioscrobbler.com/2.0/?method=chart.${method}&YOUR_API_KEY&format=json`
      )
      .pipe(map((t) => t.tracks));
  }

  searchMethod(val: string): Observable<any> {
    return this.http.get(
      `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${val}&YOUR_API_KEY&format=json`
    );
  }
}
