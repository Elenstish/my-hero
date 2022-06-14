import {createFeatureSelector, createSelector} from "@ngrx/store";
import {MyHeroState, MyHeroStateName} from "../models/my-hero-state.model";
import {MyHeroInterface} from "../models/my-hero.model";

export const myHeroFeatureSelector = createFeatureSelector<MyHeroState>(MyHeroStateName);

export const selectHeroDetails = createSelector(
    myHeroFeatureSelector,
    (state: MyHeroState): MyHeroInterface => state.heroState
);
