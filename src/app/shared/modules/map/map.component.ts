import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
import { MapService } from "./map.service";
@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class MapComponent implements OnInit {
  private map: any;
  public readonly API_KEY = "vrwpROPBXRIOikeP9TG5fHYSK21sacQI";

  @Input("location") set location(location: string) {
    this.createMap();
    this.getGeoPosition(location);
  }

  constructor(private mapService: MapService) {}

  ngOnInit() {}

  private createMap() {
    this.map = this.mapService.createMap({ apiKey: this.API_KEY });
  }

  private getGeoPosition(location: string) {
    this.mapService.getGeoPosition(location, this.API_KEY).subscribe(
      (position) => {
        this.mapService.initMap(this.map, position);
      },
      (error: Error) => {
        this.mapService.addPopupToMap(this.map, error.message);
      }
    );
  }
}
