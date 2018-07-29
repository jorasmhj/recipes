import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService{
	ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients : Ingredient[] = [
		new Ingredient('Apple',5),
		new Ingredient('Tomatoes',10),
	];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.getIngredients())
  }

  addIngredients(ingredient: Ingredient[]){
    for(let i =0; i < ingredient.length; i++){
      ingredient[i].amount +=2;
    }
    this.ingredients.push(...ingredient);
    this.ingredientsChanged.emit(this.getIngredients())
  }

}
