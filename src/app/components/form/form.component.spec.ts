import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  const formData = {
    id: "login-form",
    inputs: [ {
      id: "email",
      type: "email",
      placeholder: "Email"
    }, {
      id: "password",
      type: "password",
      placeholder: "Mot de passe"
    }],
    buttons : [{
      id: "submit-btn",
      type: "submit",
      textContent: "Valider"
    }, {
      id: "reset-btn",
      type: "reset",
      textContent: "Réinitialiser"
    }]
  }

  let formInputValues = {
    email: "",
    password: ""
  }

  let errorMessages = {
    email: "",
    password: "",
    global: ""
  }

  const handler = () => {

  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    component.data = formData
    component.formInputValues = formInputValues
    component.errorMessages = errorMessages
    component.handler = handler
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
