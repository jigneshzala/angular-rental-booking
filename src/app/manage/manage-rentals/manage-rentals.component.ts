import { Component, OnInit } from "@angular/core";
import { Rental } from "src/app/rental/shared/rental.model";
import { RentalService } from "src/app/rental/shared/rental.service";

@Component({
  selector: "app-manage-rentals",
  templateUrl: "./manage-rentals.component.html",
  styleUrls: ["./manage-rentals.component.scss"],
})
export class ManageRentalsComponent implements OnInit {
  rentals: Rental[] = [];

  constructor(private rentalService: RentalService) {}

  ngOnInit() {
    this.rentalService.getAuthUserRentals().subscribe((rentals: Rental[]) => {
      this.rentals = rentals;
    });
  }
}
