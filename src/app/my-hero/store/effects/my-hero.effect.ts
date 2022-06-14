import { Injectable } from '@angular/core';
import {
  changeHeroDetailAction,
  getHeroDetailAction, getHeroDetailFailureAction,
  getHeroDetailSuccessAction
} from '../actions/my-hero.action';
import { MyHeroInterface } from '../models/my-hero.model';
import { of } from 'rxjs';
import { MyHeroService } from '../serviсes/my-hero.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

@Injectable()

export class GetHeroDetailEffect {
    getHero$ = createEffect(() => this.actions$.pipe(
        ofType(getHeroDetailAction),
        switchMap(() => {
            return this.myHeroService.getHeroDetail().pipe(
                map((hero: MyHeroInterface) =>  getHeroDetailSuccessAction({ items: hero })),
                catchError(() => {
                    return of(getHeroDetailFailureAction());
                })
            );
        })
    ));

    changeHero$ = createEffect(() => this.actions$.pipe(
        ofType(changeHeroDetailAction),
        switchMap((strengthValue) => {
          return this.myHeroService.updateHeroDetail(strengthValue.strength).pipe(
            map((hero: MyHeroInterface) => getHeroDetailSuccessAction({ items: hero })),
            catchError(() => {
              return of(getHeroDetailFailureAction());
            })
          );
        })
    ));

    constructor(private actions$: Actions,
                private myHeroService: MyHeroService) {
    }

}
