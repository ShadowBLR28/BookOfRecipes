import { Component, Inject, Input, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/interfaces/recipe';

@Component({
  selector: 'preview-recipe',
  templateUrl: './preview-recipe.component.html',
  styleUrls: ['./preview-recipe.component.css']
})
export class PreviewRecipeComponent implements OnInit {
  @Input()
  recipe!: IRecipe

  constructor() { }

  ngOnInit(): void {
  }

  changeFavoriteStaus(): void {
    this.recipe.isFavorite = !this.recipe.isFavorite;
  }
}
