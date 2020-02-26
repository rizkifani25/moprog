import { Component } from "@angular/core";
import { Recipe } from "./fani07.service";

@Component({
  selector: "app-fani07",
  templateUrl: "fani07.page.html",
  styleUrls: ["fani07.page.scss"]
})
export class Fani07Page {
  constructor() {}

  Recipe = Recipe;

  getAllRecipe() {
    console.log(...this.Recipe);
    return [...this.Recipe];
  }

  getRecipe(recipeId: String) {
    return {
      ...this.Recipe.find(Recipe => {
        return Recipe.id === recipeId;
      })
    };
  }
}
