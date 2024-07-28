import { Component } from '@angular/core';
import { FormComponent } from '../../../../components/form/form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { NotificationService } from '../../../notification/services/notification.service';
import { FormatCheckerService } from '../../../../services/format-checker/format-checker.service';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormComponent, FontAwesomeModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  isLoading!: boolean

  formData = {
    id: "login-form",
    fields : [
      {
        id:"email",
        type:"email",
        placeholder:"Entrez votre email",
        icon: faEnvelope
      },
      {
        id:"password",
        type: "password",
        placeholder: "Entrez votre mot de passe",
        icon: faLock
      }
    ],
    buttons: [
        {
          id: "submit-btn",
          type: "submit",
          textContent: "Valider"
        },
        {
          id: "reset-btn",
          type: "reset",
          textContent: "Réinitialiser"
        }
    ]
  }

  formInputValues = {
    email: "",
    password: ""
  }

  errorMessages = {
    email: "",
    password: "",
    global: ""
  }

  constructor(
    private notificationService: NotificationService,
    private formatCheckerService: FormatCheckerService,
    private router: Router
  ){}

  ngOnInit (): void {
    this.notificationService.updateNotificationState({
      type: 'info',
      content: 'Page de connexion'
    })
  }

  onSubmit = (e: any): void => {
    e.preventDefault();
    console.log('e', this.formInputValues)

    const { email, password } = this.formInputValues

    if(!email || !password){
      this.errorMessages.global = "Veuillez saisir un email et un mot de passe"
      return
    }

    this.errorMessages.global = ""

    const isEmailFormatValid = this.formatCheckerService.checkEmail(email)
    if(!isEmailFormatValid){
      this.errorMessages.email = "Email incorrect"
      return
    }
    this.errorMessages.email = ""

    const isPasswordFormatValid = this.formatCheckerService.checkPassword(password)
    if(!isPasswordFormatValid){
      this.errorMessages.password = "Mot de passe incorrect, il doit avoir au moins 12 caractères"
      return
    }

    this.errorMessages.password = ""

    this.isLoading = true
    this.notificationService.updateNotificationState({
      type: 'success',
      content: 'Chargement en cours'
    })

    setTimeout(() => {
      this.router.navigate(["home"])
    }, 3000)
  }

}
