import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { Fani11Page } from "./fani11.page";

const routes: Routes = [
  {
    path: "fani11",
    component: Fani11Page,
    children: [
      {
        path: "discover",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("./discover/discover.module").then(
                m => m.DiscoverPageModule
              )
          }
        ]
      },
      {
        path: "offer",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("./offer/offer.module").then(m => m.OfferPageModule)
          }
        ]
      },
      {
        path: "bookings",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("./bookings/booking.module").then(m => m.BookingPageModule)
          }
        ]
      },
      {
        path: "",
        redirectTo: "/fani11/fani11/discover",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "/fani11/fani11/discover",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Fani11RoutingModule {}
