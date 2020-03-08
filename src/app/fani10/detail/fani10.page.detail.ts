import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Recipe } from "../fani10.recipes";

@Component({
  selector: "app-fani10",
  templateUrl: "fani10.page.detail.html"
})
export class Fani10PageDetail implements OnInit {
  Recipe = Recipe;
  recipeId: string;
  imageUrl: string;
  title: string;
  ingredients = [];

  constructor(private actRoute: ActivatedRoute) {}

  ngOnInit() {
    this.actRoute.paramMap.subscribe(params => {
      this.recipeId = params.get("id");
    });
    this.getRecipe(this.recipeId);
  }

  getRecipe(recipeId: string) {
    let recipeResult = this.Recipe.find(Recipe => Recipe.id === recipeId);
    this.imageUrl = recipeResult.imageUrl;
    this.title = recipeResult.title;
    this.ingredients = recipeResult.ingredients;
  }

  removeRecipeContent(recipeId: string) {
    let recipeResult = this.Recipe.find(Recipe => Recipe.id === recipeId);
    recipeResult.ingredients = [];
    recipeResult.imageUrl = null;
    this.imageUrl = null;
    this.title = "Recipe Deleted";
    this.ingredients = recipeResult.ingredients;
  }

  removeRecipe(recipeId: string) {
    let index = Recipe.map(item => {
      return item.id;
    }).indexOf(recipeId);
    Recipe.splice(index, 1);
  }
}
