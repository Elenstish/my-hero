import {MyHeroInterface} from "./my-hero.model";

export const MyHeroStateName = 'myHero';

export interface MyHeroState {
    heroState: MyHeroInterface;
}
