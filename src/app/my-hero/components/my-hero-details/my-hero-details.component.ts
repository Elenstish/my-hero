import { Component, OnInit } from '@angular/core';
import {MyHeroInterface} from "../../store/models/my-hero.model";
import {MyHeroStoreService} from "../../store/serviсes/my-hero-store.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-my-hero-details',
  templateUrl: './my-hero-details.component.html',
  styleUrls: ['./my-hero-details.component.scss']
})
export class MyHeroDetailsComponent implements OnInit {
  public myHeroDetails$!: Observable<MyHeroInterface>;

  constructor(private myHeroStoreService: MyHeroStoreService) { }

  ngOnInit(): void {
    this.myHeroStoreService.getMyHeroDetails();
    this.myHeroDetails$ = this.myHeroStoreService.selectMyHeroDetails();
  }

  public strengthUpdate(updateStrength: number): void {
    this.myHeroStoreService.changeMyHeroDetails(updateStrength);
  }
}
