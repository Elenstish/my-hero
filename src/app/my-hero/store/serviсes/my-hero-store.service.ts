import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { changeHeroDetailAction, getHeroDetailAction } from '../actions/my-hero.action';
import { Observable } from 'rxjs';
import { MyHeroInterface } from '../models/my-hero.model';
import { selectHeroDetails } from '../selectors/my-hero.selectors';
import { MyHeroState } from '../models/my-hero-state.model';

@Injectable({
  providedIn: 'root'
})
export class MyHeroStoreService {

  constructor(private store: Store<MyHeroState>) { }

  public getMyHeroDetails(): void {
    this.store.dispatch(getHeroDetailAction());
  }

  public selectMyHeroDetails(): Observable<MyHeroInterface> {
    return this.store.pipe(select(selectHeroDetails));
  }

  public changeMyHeroDetails(value: number): void {
    this.store.dispatch(changeHeroDetailAction({strength: value}));
  }
}
