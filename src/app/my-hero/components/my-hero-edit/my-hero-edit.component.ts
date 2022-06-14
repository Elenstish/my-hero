import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-my-hero-edit',
  templateUrl: './my-hero-edit.component.html',
  styleUrls: ['./my-hero-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyHeroEditComponent {
  @Output() strengthUpdate: EventEmitter<number> = new EventEmitter();
  @Input() strength!: number;

  public onDecrStrength(): void {
    if (!this.strength) {
      return;
    }
    this.strength = this.strength - 1;
  }

  public onIncrStrength(): void {
    this.strength = this.strength + 1;
  }

  public onSubmit(): void {
    this.strengthUpdate.emit(this.strength);
  }
}
