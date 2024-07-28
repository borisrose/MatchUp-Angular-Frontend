import { Component, Input } from '@angular/core';
import { FieldComponent } from '../field/field.component';
import { ButtonComponent } from '../button/button.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FieldComponent, ButtonComponent, NgForOf],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  @Input() data!: any
}
