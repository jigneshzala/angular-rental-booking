import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

interface TomResponse {
  summary: { [key: string]: any };
  results: { [key: string]: any }[];
}

interface GeoPosition {
  lat: number;
  lon: number;
}

@Injectable({
  providedIn: "root",
})
export class MapService {
  public readonly API_KEY = "vrwpROPBXRIOikeP9TG5fHYSK21sacQI";

  constructor(private http: HttpClient) {}

  requestGeoLocation(location: string): Observable<GeoPosition> {
    return this.http
      .get(
        `https://api.tomtom.com/search/2/geocode/${location}.JSON?key=${this.API_KEY}`
      )
      .pipe(
        map((tomRes: TomResponse) => {
          const results = tomRes.results;
          if (results && results.length > 0) {
            return results[0].position;
          }

          throw new Error("Location not found!");
        })
      );
  }
}
