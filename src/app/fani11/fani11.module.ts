import { NgModule, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { Fani11RoutingModule } from "./fani11.routing.module";

import { Fani11Page } from "./fani11.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, Fani11RoutingModule],
  declarations: [Fani11Page]
})
export class Fani11PageModule {}
