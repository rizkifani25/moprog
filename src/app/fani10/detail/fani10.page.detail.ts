import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Recipe } from "../fani10.recipes";
import { AlertController } from "@ionic/angular";

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

  constructor(
    private actRoute: ActivatedRoute,
    public alertController: AlertController
  ) {}

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

  async presentAlert(recipeId: string) {
    const alert = await this.alertController.create({
      header: "Alert!",
      message: "Are you sure?",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Delete canceled.");
          }
        },
        {
          text: "Delete",
          handler: () => {
            this.removeRecipe(recipeId);
          }
        }
      ]
    });

    await alert.present();
  }
}
