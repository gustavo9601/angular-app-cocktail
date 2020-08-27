import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCocktailComponent } from './detail-cocktail.component';

describe('DetailCocktailComponent', () => {
  let component: DetailCocktailComponent;
  let fixture: ComponentFixture<DetailCocktailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCocktailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCocktailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
