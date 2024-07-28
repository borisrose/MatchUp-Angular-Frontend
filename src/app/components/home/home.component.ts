import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Router } from '@angular/router';
import { NotificationService } from '../../features/notification/services/notification.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  buttonData = {
    id: "home-login-button",
    type: "button",
    textContent: "Se connecter"
  }

  constructor(private router: Router, private notificationService: NotificationService){}

  ngOnInit() {
    this.notificationService.updateNotificationState({
      content: "Page d'accueil",
      type: "info"
    })
  }

  onClick () {
    this.router.navigate(["login"])
  }

}
