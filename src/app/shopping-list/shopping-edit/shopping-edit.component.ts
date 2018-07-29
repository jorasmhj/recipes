import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {Ingredient} from '../../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list.service'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() itemAdded = new EventEmitter<Ingredient>();
  nameInput : string
  amountInput : number
  
  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(){
    const newIngredient = new Ingredient(this.nameInput,this.amountInput);
    this.shoppingListService.addIngredient(newIngredient)
  }

}
