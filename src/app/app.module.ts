import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHeroDetailsComponent } from './my-hero/components/my-hero-details/my-hero-details.component';
import { MyHeroEditComponent } from './my-hero/components/my-hero-edit/my-hero-edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {combineReducers, StoreModule} from '@ngrx/store';
import {EffectsModule} from "@ngrx/effects";
import {myHeroReducers} from "./my-hero/store/redusers/my-hero-state.reducers";
import {MyHeroStateName} from "./my-hero/store/models/my-hero-state.model";
import {GetHeroDetailEffect} from "./my-hero/store/effects/my-hero.effect";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyHeroDetailsComponent,
    MyHeroEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([GetHeroDetailEffect]),
    StoreModule.forRoot({ [MyHeroStateName]: combineReducers(myHeroReducers) }),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
