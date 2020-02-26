import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { Fani05PageInput } from "./fani05.page.input";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: "",
        component: Fani05PageInput
      }
    ])
  ],
  declarations: [Fani05PageInput]
})
export class Fani05PageModuleInput {}
