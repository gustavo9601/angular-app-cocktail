import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ifilter} from '../interfaces/ifilter';
import {Observable} from 'rxjs';
import {ICocktail} from '../interfaces/icocktail';

// npm i lodash
import * as _ from 'lodash';
import {CocktailModel} from '../models/cocktail.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private http: HttpClient) {
  }

  getCockTailsFilter(filter: Ifilter): Observable<ICocktail[]> {
    const urlBase = 'https://www.thecocktaildb.com/api/json/v1/1/';
    let additionalUrl = '';

    if (filter.searchBy === 'name') {
      additionalUrl = 'search.php?s=' + filter.value;
    } else {
      additionalUrl = 'filter.php?';

      switch (filter.searchBy) {
        case 'glass':
          additionalUrl += 'g=';
          break;
        case 'category':
          additionalUrl += 'c=';
          break;
        default:
          additionalUrl += 'i=';
          break;
      }

      additionalUrl += filter.value;
    }

    // Forma la URL
    const finalUrl = urlBase + additionalUrl;

    return this.http.get(finalUrl).pipe(
      map<any, ICocktail[]>(dataApi => this.parseData(_.get(dataApi, 'drinks')))
    );
  }


  private parseData(listCocktails) {

    const newListCockTails = [];

    // Permitira iterrar el arreglo pasado por paraemtro
    // se usa la funcion lodash para que compurbe nulos el foreach y los omita
    _.forEach(listCocktails, row => {
      // cada fila/registro que tiene el formato propio del api, se lo pasamos al modelo
      // de forma que este lo transforme y genere la data con los atributos de la interfaz
      const cocktail = new CocktailModel(row);
      newListCockTails.push(cocktail);
    });

    return newListCockTails;
  }

  getCocktailById(id: string): Observable<ICocktail[]> {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id;
    return this.http.get(url).pipe(
      map<any, ICocktail[]>(
        (dataApi) => {
          return this.parseData(_.get(dataApi, 'drinks'));
        }
      )
    );
  }

}
