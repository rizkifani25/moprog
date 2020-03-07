import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { Fani08PageDetail } from "./fani08.page.detail";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: "",
        component: Fani08PageDetail
      }
    ])
  ],
  declarations: [Fani08PageDetail]
})
export class Fani08PageModuleDetail {}
