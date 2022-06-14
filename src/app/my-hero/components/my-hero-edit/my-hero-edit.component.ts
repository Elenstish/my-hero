import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import {MyHeroInterface} from "../../store/models/my-hero.model";

@Component({
  selector: 'app-my-hero-edit',
  templateUrl: './my-hero-edit.component.html',
  styleUrls: ['./my-hero-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyHeroEditComponent {
  @Input()
  set myHero(hero: MyHeroInterface) {
    this.name = hero.name;
    this.strength = hero.strength;
  };
  @Output() strengthUpdate: EventEmitter<number> = new EventEmitter();

  public name!: string;
  public strength!: number;

  constructor(private cdr: ChangeDetectorRef) { }

  public onChangeStrength(isStrength: number): void {
    this.strength = this.strength + isStrength;
  }

  public onSubmit(): void {
    this.cdr.markForCheck();
    this.strengthUpdate.emit(this.strength);
  }
}
