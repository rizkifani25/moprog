import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { OfferNewPageRoutingModule } from "./offer-new.routing.module";

import { OfferNewPage } from "./offer-new.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, OfferNewPageRoutingModule],
  declarations: [OfferNewPage]
})
export class OfferNewPageModule {}
