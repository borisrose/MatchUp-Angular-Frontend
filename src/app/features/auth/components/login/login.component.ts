import { Component } from '@angular/core';
import { FormComponent } from '../../../../components/form/form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { NotificationService } from '../../../notification/services/notification.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormComponent, FontAwesomeModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

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

  constructor(private notificationService: NotificationService){}

  ngOnInit (): void {
    this.notificationService.updateNotificationState({
      type: 'info',
      content: 'Page de connexion'
    })
  }

}
