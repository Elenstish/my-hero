import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input, OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MyHeroStoreService } from '../../store/serviсes/my-hero-store.service';

@Component({
  selector: 'app-my-hero-edit',
  templateUrl: './my-hero-edit.component.html',
  styleUrls: ['./my-hero-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyHeroEditComponent implements OnInit {
  @Output() strengthUpdate: EventEmitter<number> = new EventEmitter();
  @Input() strength: number;

  public myHeroForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    console.log('strength', this.strength)
    this.initForm(this.strength);
  }

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

  private initForm(strength: number): void {
    this.myHeroForm = this.fb.group({
      strength: [strength, [Validators.required, this.strengthValidator]]
      }
    )

  }

  private strengthValidator(control: FormControl): ValidationErrors | null {
    if (Number(control.value) === 10 || Number(control.value) <= 0) {
      return {
        strengthError: true
      }
    }
    return null;
  }


  public onStrengthSubmit() {
    if (this.myHeroForm.invalid) {
      return;
    }
    console.log('myHeroForm', this.myHeroForm);
  }
}
