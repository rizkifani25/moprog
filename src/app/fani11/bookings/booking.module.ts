import { NgModule, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { BookingPageRoutingModule } from "./booking.routing.module";

import { BookingPage } from "./booking.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, BookingPageRoutingModule],
  declarations: [BookingPage]
})
export class BookingPageModule {}
