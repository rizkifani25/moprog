import { Component, OnInit } from "@angular/core";

import { PlacesService } from "../fani11.services";
import { Place } from "../fani11.places.model";

@Component({
  selector: "app-offer",
  templateUrl: "offer.page.html",
  styleUrls: ["offer.page.scss"]
})
export class OfferPage implements OnInit {
  loadedPlaces: Place[];

  constructor(private placesServices: PlacesService) {}

  onLogout = () => {
    console.log("Logout");
  };

  ngOnInit() {
    this.loadedPlaces = this.placesServices.places;
  }
}
