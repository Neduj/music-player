import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { Tracks } from 'src/app/models/tracks.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getTracks(): Observable<Tracks> {
    return this.http
      .get<Tracks>(
        `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&`
      )
      .pipe(map((t) => t.tracks));
  }

  search(trackName: string): Observable<any> {
    return this.http.get(
      `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${trackName}&`
    );
  }
}
