import {Component, OnInit} from '@angular/core';
import {CocktailService} from '../../../services/cocktail.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CocktailModel} from '../../../models/cocktail.model';
import {ICocktail} from '../../../interfaces/icocktail';

@Component({
  selector: 'app-detail-cocktail',
  templateUrl: './detail-cocktail.component.html',
  styleUrls: ['./detail-cocktail.component.css']
})
export class DetailCocktailComponent implements OnInit {

  public cocktail: CocktailModel;
  public loadCocktail: boolean;

  constructor(private _cocktailService: CocktailService,
              private route: ActivatedRoute,
              private router: Router) {
    this.cocktail = null;
    this.loadCocktail = false;
  }

  ngOnInit() {
    this.getParamsUrl();
  }

  getParamsUrl() {
    this.route.params.subscribe(
      (paramsUrl) => {
        this.getCocktail(paramsUrl.id);
      }
    );
  }

  getCocktail(id) {
    this.loadCocktail = true;
    this._cocktailService.getCocktailById(id).subscribe(
      (respuesta: ICocktail[]) => {
        console.log('respuesta', respuesta);
        if (respuesta.length > 0) {
          this.cocktail = respuesta[0];
        } else {
          this.router.navigate(['list-cocktails']);
        }
      },
      () => {
      },
      () => {
        this.loadCocktail = false;
      }
    );
  }

}
