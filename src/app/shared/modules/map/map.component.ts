import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
import tt from "@tomtom-international/web-sdk-maps";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class MapComponent implements OnInit {
  @Input("location") set location(location: string) {
    this.createMap();
  }
  private readonly API_KEY = "vrwpROPBXRIOikeP9TG5fHYSK21sacQI";

  constructor() {}

  ngOnInit() {}

  private createMap() {
    const map = tt.map({
      key: this.API_KEY,
      container: "bwm-map",
      style: "tomtom://vector/1/basic-main",
    });

    map.addControl(new tt.NavigationControl());
  }
}
