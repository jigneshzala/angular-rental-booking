import { Component, OnInit } from "@angular/core";

import { Rental } from '../shared/rental.model';

@Component({
  selector: "app-rental-listing",
  templateUrl: "./rental-listing.component.html",
  styleUrls: ["./rental-listing.component.scss"],
})
export class RentalListingComponent implements OnInit {
  constructor() {}

  rentals: Rental[] = [
    {
      _id: "1",
      title: "Central Apartment",
      city: "New York",
      street: "Times Square",
      category: "apartment",
      image: "http://via.placeholder.com/350x250",
      numOfRooms: 3,
      description: "Very nice apartment",
      dailyPrice: 34,
      shared: false,
      createdAt: "1/1/2020",
    },
    {
      _id: "2",
      title: "Central Apartment 2",
      city: "San Francisco",
      street: "Main street",
      category: "condo",
      image: "http://via.placeholder.com/350x250",
      numOfRooms: 2,
      description: "Very nice apartment",
      dailyPrice: 12,
      shared: true,
      createdAt: "24/12/2017",
    },
    {
      _id: "3",
      title: "Central Apartment 3",
      city: "Bratislava",
      street: "Hlavna",
      category: "condo",
      image: "http://via.placeholder.com/350x250",
      numOfRooms: 2,
      description: "Very nice apartment",
      dailyPrice: 334,
      shared: true,
      createdAt: "24/12/2017",
    },
    {
      _id: "4",
      title: "Central Apartment 4",
      city: "Berlin",
      street: "Haupt strasse",
      category: "house",
      image: "http://via.placeholder.com/350x250",
      numOfRooms: 9,
      description: "Very nice apartment",
      dailyPrice: 33,
      shared: true,
      createdAt: "24/12/2017",
    },
  ];

  ngOnInit() {}
}
