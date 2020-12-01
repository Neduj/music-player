import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tracks } from 'src/app/models/tracks.interface';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  chartMethod(method: string): Observable<Tracks> {
    return this.http
      .get<Tracks>(
        `http://ws.audioscrobbler.com/2.0/?method=chart.${method}&${environment.api_key}&format=json`
      )
      .pipe(map((t) => t.tracks));
  }
}
