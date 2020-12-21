import { Component, OnInit } from "@angular/core";

import { Rental } from "../shared/rental.model";
import { RentalService } from "../shared/rental.service";

import { IRental, AppStorage } from "../shared/rental.interface";
@Component({
  selector: "app-rental-listing",
  templateUrl: "./rental-listing.component.html",
  styleUrls: ["./rental-listing.component.scss"],
})
export class RentalListingComponent implements OnInit, IRental {
  constructor(private rentalService: RentalService) {}

  rentals: Rental[] = [];
  someData = "Some Data1";
  isLoaded = false;
  parentData = 10;

  ngOnInit() {
    const appStorage = new AppStorage<string>();

    appStorage.addItem("23");
    appStorage.addItem("2343433");

    const item = appStorage.getItem(0);
    const items = appStorage.displayItems();

    this.rentalService.getRentals().subscribe((rentals: Rental[]) => {
      this.rentals = rentals;
    });
  }

  implementMe() {
    return "";
  }
}
