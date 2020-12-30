import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MapService {
  public readonly API_KEY = "vrwpROPBXRIOikeP9TG5fHYSK21sacQI";

  constructor(private http: HttpClient) {}

  requestGeoLocation(location: string): Observable<any> {
    return this.http.get(
      `https://api.tomtom.com/search/2/geocode/${location}.JSON?key=${this.API_KEY}`
    );
  }
}
