import { Component, Input } from '@angular/core';
import { FieldComponent } from '../field/field.component';
import { ButtonComponent } from '../button/button.component';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FieldComponent, ButtonComponent, NgForOf, NgIf],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  @Input() data!: any
  @Input() handler!: (e:any) => void
  @Input() formInputValues!: any
  @Input() errorMessages!: any

}
