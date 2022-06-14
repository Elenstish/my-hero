import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {MyHeroConst} from "../../constants/my-hero.constants";
import {MyHeroInterface} from "../models/my-hero.model";

@Injectable({
  providedIn: 'root'
})
export class MyHeroService {

  getHeroDetail(): Observable<MyHeroInterface> {
    return of(MyHeroConst);
  }
}
