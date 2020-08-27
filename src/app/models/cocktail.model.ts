import {ICocktail} from '../interfaces/icocktail';

// npm i lodash
import * as _ from 'lodash';

/*
*
* Trabajandolo de esta forma, permite obtener el objeto de respuesta del api
* y modearlo a la interfaz para hacerle una transformacion previa
* */
export class CocktailModel implements ICocktail {
  constructor(data) {
    // Se recibira toda la data del api, y lo genera como objeto
    _.set(this, 'data', data);
  }

  get id(): string {
    return _.get(this, 'data.idDrink');
  }

  get name(): string {
    return _.get(this, 'data.strDrink');
  }

  get img(): string {
    return _.get(this, 'data.strDrinkThumb');
  }

  get glass(): string {
    return _.get(this, 'data.strGlass');
  }

  get ingredients(): string[] {

    /*
    * Ejemplo respuesta del Api
    *
    *       "strIngredient1": "Vodka",
            "strIngredient2": "Lime",
            "strIngredient3": "Angostura bitters",
            "strIngredient4": "Tonic water",
    *
    * */

    let index = 1;
    let ingredient = _.get(this, 'data.strIngredient' + index);
    let ingredients = [];

    while (ingredient) {
      ingredients.push(ingredient);
      index++;
      ingredient = _.get(this, 'data.strIngredient' + index);
    }

    return ingredients;
  }

  get numIngredients(): number {
    return this.ingredients.length;
  }

  get instructions(): string {
    return _.get(this, 'data.strInstructions');
  }

  get measures(): string[] {
    /*
    * Ejemplo respuesta del Api
    *
            "strMeasure1": "5 cl ",
            "strMeasure2": "1/2 ",
            "strMeasure3": "4 dashes ",
            "strMeasure4": "1 dl Schweppes ",
            "strMeasure5": "4 ",
    *
    * */

    let index = 1;
    let measure = _.get(this, 'data.strMeasure' + index);
    let measures = [];

    while (measure) {
      measures.push(measure);
      index++;
      measure = _.get(this, 'data.strIngredistrMeasureent' + index);
    }

    return measures;
  }

  get numMeasures(): number {
    return this.measures.length;
  }

}
