import { Injectable } from '@angular/core';
import { IPager } from '../interfaces/pager';
import { RecipeFilter } from '../interfaces/recipeFilter';
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { IRecipe } from '../interfaces/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  getByAuthor(authorId: number, pager: IPager, filter: RecipeFilter): IRecipe[] {
    // let params = new HttpParams();
    // params.set('title', filter.title)
    //   .set('category', filter.category)
    //   .set('sortBy', filter.sortBy)
    //   .set('orderSort', filter.orderSort);

    // const url = `${environment.baseUrl}/${authorId}/${params}`;
    // console.log(url);

    return [
      { title: 'Брауни (brownie)', shortDescription: '', description: 'Один из самых популярных десертов в мире — брауни — был придуман в 1893 году на кухне легендарного отеля Palmer House в Чикаго. Этот пирог там пекут до сих пор по оригинальному рецепту, покрывая сверху абрикосовой глазурью. В домашней версии, впрочем, у брауни получается такая изумительная сахарная корочка, что глазировать ее было бы преступлением. У традиционных шоколадных брауни ванильный аромат, хрустящая корочка и влажная серединка. В торт также добавляют грецкие орехи или фисташки, а еще клюкву.', rating: 2.5, prepareTime: 20, cookingTime: 15, portions: 4, imageUrl: '../../assets/p_O.png', isFavorite: true },
      { title: '1', shortDescription: 'Куриные крылышки в соусе «Кровавая Мэри»Куриные крылышки в соусе «Кровавая Мэри»', description: 'long descr', rating: 2.5, prepareTime: 20, cookingTime: 15, portions: 4, imageUrl: '../../assets/logo.png', isFavorite: false },
      { title: '1', shortDescription: 'test short descr', description: 'long descr', rating: 2.9, prepareTime: 20, cookingTime: 15, portions: 4, imageUrl: '../../assets/logo.png', isFavorite: false },
      { title: '1', shortDescription: 'test short descr', description: 'long descr', rating: 2.1, prepareTime: 20, cookingTime: 15, portions: 4, imageUrl: '../../assets/logo.png', isFavorite: false },
      { title: '1', shortDescription: 'test short descr', description: 'long descr', rating: 3.5, prepareTime: 20, cookingTime: 15, portions: 4, imageUrl: '../../assets/logo.png', isFavorite: false },
      { title: '1', shortDescription: 'test short descr', description: 'long descr', rating: 5, prepareTime: 20, cookingTime: 15, portions: 4, imageUrl: '../../assets/logo.png', isFavorite: false },

    ]
    //return this.http.get(`${environment.baseUrl}/${authorId}/${params}`)
  }
}
