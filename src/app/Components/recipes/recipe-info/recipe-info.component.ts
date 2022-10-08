import { Component, OnInit } from '@angular/core';
import { IRecipeInfo } from 'src/app/interfaces/recipeInfo';

@Component({
  selector: 'recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.css']
})
export class RecipeInfoComponent implements OnInit {
  isRated: boolean = false;
  recipe: IRecipeInfo;
  rating: number = 0;

  constructor() {
    this.recipe = {
      title: "Куриные крылышки в соусе «Кровавая Мэри»",
      shortDescription: "Замечательный рецепт,",
      description: "Замечательный рецепт, мы сами не ожидали настолько яркого вкуса и точного баланса." +
        "Крылышки сначала хорошо впитали томатный соус — ровно такой, который готовят для «Кровавой Мэри»." +
        "А затем перед жаркой мы снова их соединили — только соус предварительно выпарили, благодаря чему птица получилась глазированной." +
        "В рецепте также упомянута сметана — ее нужно соединить с крыльями в самом конце. Ни в коем случае не пренебрегайте этим пунктом: тихая сметана хорошо уравновешивает яркий вкус курицы и соуса — самое то! А что касается используемого маринада, то выливать его не нужно — уберите его в холодильник, и вот вам отличная основа для мичелады, осталось только найти подходящее пиво. Ну и классический коктейль «Кровавая Мэри» как дополнение к ужину тоже никто не отменял.",
      rating: 0,
      myRating:4,
      prepareTime: 10,
      cookingTime: 20,
      portions: 3,
      imageUrl: "../assets/logo.png",
      isFavorite: false,
      steps: [
        { number: 1, url: '../assets/logo.png', description: "Разжечь мангал" },
        { number: 2, url: '../assets/logo.png', description: "В другой большой миске приготовить «Кровавую Мэри»: соединить томатный сок, водку, коричневый сахар, табаско, столовую ложку хрена, вустерширский соус и лимонный сок. Взбить до полного растворения, приправить солью и перцем." }

      ],
      ingredients: [
        { name: 'Кукуруза свежая', countity: 30, unitValue: 'г' },
        { name: 'Горох', countity: 200, unitValue: 'кг' },
        { name: 'Сахар', countity: 2, unitValue: 'чайные ложки' },
        { name: 'Молоко', countity: 200, unitValue: 'мл' },
      ]
    };

    if (this.recipe.myRating) {
      this.isRated = true;
      this.rating = this.recipe.myRating;
    }
  }

  ngOnInit(): void {
  }

  rateRecipe(): void {
    if (this.isRated) {
      return;
    }

    this.recipe.rating = this.rating;
    this.isRated = true;
  }

}
