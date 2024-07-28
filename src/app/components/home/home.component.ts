import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Router } from '@angular/router';

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

  constructor(private router: Router){}


  onClick () {
    this.router.navigate(["login"])
  }

}
