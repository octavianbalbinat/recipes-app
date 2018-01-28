import { EventEmitter, Injectable } from '@angular/core'

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
    new Recipe(
        'Supa de legume', 
        'Legume taiete si fierte', 
        'http://picturetherecipe.com/wp-content/uploads/2013/07/Picture-The-Recipe-Tips-Muffin-tin-for-stuffed-veggies.jpg',
    [
        new Ingredient('Morcovi', 3),
        new Ingredient('Cartofi', 5)
    ]),
    new Recipe(
        'Mici romanesti', 
        'Ca la Kaufland', 
        'http://picturetherecipe.com/wp-content/uploads/2013/07/Picture-The-Recipe-Tips-Muffin-tin-for-stuffed-veggies.jpg',
    [
        new Ingredient('Carne vita', 3),
        new Ingredient('Piper', 5)
    ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
      return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

}