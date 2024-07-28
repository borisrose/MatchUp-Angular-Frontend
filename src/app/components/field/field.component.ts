import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-field',
  standalone: true,
  imports: [FontAwesomeModule, FormsModule, NgIf],
  templateUrl: './field.component.html',
  styleUrl: './field.component.scss'
})
export class FieldComponent {
  @Input() data!: any
  @Input() model!: any
  @Input() errorMessages!: any
}
