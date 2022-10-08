import { Component, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/interfaces/recipe';
import { RecipeService } from 'src/app/Services/recipe.service';

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.css']
})
export class AuthorPageComponent implements OnInit {
  recipes: IRecipe[] = new Array<IRecipe>();
  constructor(private recipeService: RecipeService) {
    this.recipes = this.recipeService.getByAuthor(0, null!, null!);
  }

  ngOnInit(): void {
  }

}
