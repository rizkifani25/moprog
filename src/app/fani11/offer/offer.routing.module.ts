import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { OfferPage } from "./offer.page";

const routes: Routes = [
  {
    path: "",
    component: OfferPage
  },
  {
    path: "new",
    loadChildren: () =>
      import("./offer-new/offer-new.module").then(m => m.OfferNewPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferPageRoutingModule {}
