import { Component } from "@angular/core";
import { Recipe } from "./fani08.recipes";

@Component({
  selector: "app-fani08",
  templateUrl: "fani08.page.html",
  styleUrls: ["fani08.page.scss"]
})
export class Fani08Page {
  Recipe = Recipe;

  constructor() {}

  getAllRecipe() {
    console.log(...this.Recipe);
    return [...this.Recipe];
  }
}
