import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldComponent } from './field.component';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

describe('FieldComponent', () => {
  let component: FieldComponent;
  let fixture: ComponentFixture<FieldComponent>;
  let pseudoField = {
    id: "email",
    type:"email",
    placeholder: "Entrez votre email",
    icon: faEnvelope
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldComponent);
    component = fixture.componentInstance;
    component.data = pseudoField
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
