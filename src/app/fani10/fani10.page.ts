import { Component } from "@angular/core";
import { Recipe } from "./fani10.recipes";

@Component({
  selector: "app-fani10",
  templateUrl: "fani10.page.html",
  styleUrls: ["fani10.page.scss"]
})
export class Fani10Page {
  Recipe = Recipe;

  constructor() {}

  getAllRecipe() {
    console.log(...this.Recipe);
    return [...this.Recipe];
  }
}
