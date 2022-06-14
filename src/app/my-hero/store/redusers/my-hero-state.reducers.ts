import {ActionReducerMap} from '@ngrx/store';
import {myHeroReducer} from "./my-hero.reducers";

export const myHeroReducers: ActionReducerMap<any> = {
    heroState: myHeroReducer
};
