import {MyHeroInterface} from "../models/my-hero.model";
import {Action, createReducer, on} from '@ngrx/store';
import {getHeroDetailFailureAction, getHeroDetailSuccessAction} from "../actions/my-hero.action";

const initialState: MyHeroInterface = {
    id: 0,
    name: '',
    strength: 0,
    health: 0
};

const reducer = createReducer<MyHeroInterface>(
    initialState,
    on(getHeroDetailSuccessAction, (state, {items}) => items),
    on(getHeroDetailFailureAction, () => initialState)
);

export function myHeroReducer(state: MyHeroInterface, action: Action): MyHeroInterface {
    return reducer(state, action);
}
