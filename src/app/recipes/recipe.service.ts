import { EventEmitter, Injectable } from '@angular/core'

import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list/shopping-list.service'

@Injectable()

export class RecipeService{

  recipeSelected = new EventEmitter<Recipe>();
  private recipes : Recipe[] = [
		new Recipe('Test Recipe',"This is a test","https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fck%2F11%2F04%2Ffettuccine-olive-oil-ck-x.jpg%3Fitok%3DN9u99OOY&w=700&q=85", [ new Ingredient('buns',2), new Ingredient('Meat',1) ])
	];

	constructor(private shopListService : ShoppingListService){}

  getRecipe(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients : Ingredient[]){
  	this.shopListService.addIngredients(ingredients)
  }
}
