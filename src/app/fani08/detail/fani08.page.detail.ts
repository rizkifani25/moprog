import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Recipe } from "../fani08.recipes";

@Component({
  selector: "app-fani08",
  templateUrl: "fani08.page.detail.html"
})
export class Fani08PageDetail implements OnInit {
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
}
