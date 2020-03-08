import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { Fani10PageDetail } from "./fani10.page.detail";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: "",
        component: Fani10PageDetail
      }
    ])
  ],
  declarations: [Fani10PageDetail]
})
export class Fani10PageModuleDetail {}
