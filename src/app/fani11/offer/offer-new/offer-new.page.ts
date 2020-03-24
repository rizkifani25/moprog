import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-offer-new",
  templateUrl: "./offer-new.page.html",
  styleUrls: ["./offer-new.page.scss"]
})
export class OfferNewPage implements OnInit {
  constructor(private router: Router, private navCtrl: NavController) {}

  onBookPlace() {
    this.navCtrl.navigateBack("/fani11/fani11/offer");
  }

  ngOnInit() {}
}
