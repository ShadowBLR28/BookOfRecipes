export interface IRecipe {
    title: string,
    shortDescription: string,
    description: string,
    rating: number,
    prepareTime: number,
    cookingTime: number,
    portions: number,
    imageUrl: string,
    isFavorite: boolean
}