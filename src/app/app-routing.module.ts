import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListCocktailsComponent} from './components/list-cocktails/list-cocktails.component';
import {DetailCocktailComponent} from './components/list-cocktails/detail-cocktail/detail-cocktail.component';

const routes: Routes = [
  {
    path: 'list-cocktails',
    component: ListCocktailsComponent
  },
  {
    path: 'detail-cocktail/:id',
    component: DetailCocktailComponent
  }, {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'list-cocktails'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
