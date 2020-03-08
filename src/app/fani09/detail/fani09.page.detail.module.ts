import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { Fani09PageDetail } from "./fani09.page.detail";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: "",
        component: Fani09PageDetail
      }
    ])
  ],
  declarations: [Fani09PageDetail]
})
export class Fani09PageModuleDetail {}
