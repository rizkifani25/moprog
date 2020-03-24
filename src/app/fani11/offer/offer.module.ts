import { NgModule, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { OfferPageRoutingModule } from "./offer.routing.module";

import { OfferPage } from "./offer.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, OfferPageRoutingModule],
  declarations: [OfferPage]
})
export class OfferPageModule {}
