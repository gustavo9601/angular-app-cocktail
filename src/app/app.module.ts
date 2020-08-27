import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListCocktailsComponent} from './components/list-cocktails/list-cocktails.component';
import {DetailCocktailComponent} from './components/list-cocktails/detail-cocktail/detail-cocktail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCocktailsComponent,
    DetailCocktailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
