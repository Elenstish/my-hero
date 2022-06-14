import {createAction, props} from '@ngrx/store';
import {MyHeroInterface} from "../models/my-hero.model";

export const myHeroTypes = {
    getHero: '[Hero] Get Hero Details',
    getHeroSuccess: '[Hero] Get Hero Details Success',
    getHeroFailure: '[Hero] Get Hero Details Failure',
    changeHero: '[Hero] Change Hero Strength',
    changeHeroSuccess: '[Hero] Change Hero Strength Success',
    changeHeroFailure: '[Hero] Change Hero Strength Failure',
};

export const getHeroDetailAction = createAction(myHeroTypes.getHero);

export const getHeroDetailSuccessAction = createAction(
    myHeroTypes.getHeroSuccess,
    props<{items: MyHeroInterface}>()
);

export const getHeroDetailFailureAction = createAction(myHeroTypes.getHeroFailure);

export const changeHeroDetailAction = createAction(
    myHeroTypes.changeHero,
    props<{ strength: number }>()
);
