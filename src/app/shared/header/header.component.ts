import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Input("isAuthenticated") isAuthenticated = false;
  @Input("username") username = "";
  @Input("logout") logout = () => {};

  constructor(private router: Router) {}

  ngOnInit() {}

  search(city: string) {
    city
      ? this.router.navigate([`/rentals/${city}/homes`])
      : this.router.navigate(["/rentals"]);
  }
}
