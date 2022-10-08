import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingModule } from 'ngx-bootstrap/rating';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentsModule } from './comments/comments.module';
import { ParentAuthComponent } from './Components/Auth/parent-auth/parent-auth.component';
import { AuthorPageProfileComponent } from './Components/author-page-profile/author-page-profile.component';
import { AuthorPageComponent } from './Components/author-page/author-page.component';
import { DishOfTheDayComponent } from './Components/dish-of-the-day/dish-of-the-day.component';
import { FooterComponent } from './Components/markup/footer/footer.component';
import { NavbarComponent } from './Components/markup/navbar/navbar.component';
import { ScrollDownComponent } from './Components/markup/scroll-down/scroll-down.component';
import { PreviewRecipeComponent } from './Components/preview-recipe/preview-recipe.component';
import { AllRecipesComponent } from './Components/recipes/all-recipes/all-recipes.component';
import { NewRecipeComponent } from './Components/recipes/new-recipe/new-recipe.component';
import { RecipeInfoComponent } from './Components/recipes/recipe-info/recipe-info.component';
import { CropperModule } from './cropper/cropper.module';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { LoadingInterceptor } from './interseptors/loading';
import { RecipeNotFoundComponent } from './Components/recipe-not-found/recipe-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DishOfTheDayComponent,
    AuthorPageComponent,
    ParentAuthComponent,
    NewRecipeComponent,
    AllRecipesComponent,
    PreviewRecipeComponent,
    AuthorPageProfileComponent,
    RecipeInfoComponent,
    ScrollDownComponent,
    SpinnerComponent,
    RecipeNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    RatingModule.forRoot(),
    FormsModule,
    CommentsModule,
    CropperModule
  ],
  providers: [NgbActiveModal, {
    provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
  }],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
