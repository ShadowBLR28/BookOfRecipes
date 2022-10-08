import { IIngredient } from "./ingredient";
import { IRecipe } from "./recipe";
import { IStep } from "./step";

export interface IRecipeInfo extends IRecipe {
    myRating: number | null;
    ingredients: IIngredient[];
    steps: IStep[];
}