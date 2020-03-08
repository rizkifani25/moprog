import { Component } from "@angular/core";
import { Recipe } from "./fani09.recipes";

@Component({
  selector: "app-fani09",
  templateUrl: "fani09.page.html",
  styleUrls: ["fani09.page.scss"]
})
export class Fani09Page {
  Recipe = Recipe;

  constructor() {}

  getAllRecipe() {
    console.log(...this.Recipe);
    return [...this.Recipe];
  }
}
