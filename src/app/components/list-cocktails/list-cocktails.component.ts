import {Component, OnInit} from '@angular/core';
import {Ifilter} from '../../interfaces/ifilter';
import {CocktailService} from '../../services/cocktail.service';
import {ICocktail} from '../../interfaces/icocktail';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-list-cocktails',
  templateUrl: './list-cocktails.component.html',
  styleUrls: ['./list-cocktails.component.css']
})
export class ListCocktailsComponent implements OnInit {

  public showFilter: boolean;
  public filter: Ifilter;
  public loading: boolean;
  public currentPage: number;
  public itemsPerPage: number;

  public listCocktails: ICocktail[];

  constructor(private _cocktailService: CocktailService) {
    this.showFilter = true;
    this.filter = {
      searchBy: 'name',
      value: ''
    };
    this.listCocktails = [];
    this.loading = false;
    this.currentPage = 1;
    this.itemsPerPage = 12;
  }

  ngOnInit() {
  }

  hideShowFilter() {
    this.showFilter = !this.showFilter;
  }

  filterData(form) {
    this.loading = true;
    this._cocktailService.getCockTailsFilter(this.filter).subscribe(
      (resultsFilter) => {
        console.log('resultsFilter', resultsFilter);
        this.listCocktails = resultsFilter;
      },
      (error: HttpErrorResponse) => {
        alert('Error en la peticion ' + error);
      }, () => {
        this.loading = false;
      }
    );
  }

}
