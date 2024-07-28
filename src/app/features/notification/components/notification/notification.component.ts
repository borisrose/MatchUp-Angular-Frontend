import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { Subscription } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [NgIf],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent implements OnInit, OnDestroy {
  content!: string
  type!: string
  subscription!: Subscription
  constructor(private notificationService: NotificationService){}

  ngOnInit (): void {
    this.subscription = this.notificationService.notificationState.subscribe((val) => {
        if(val){
          this.content = val.content
          this.type = val.type
        }
    })
  }

  ngOnDestroy (): void {
      this.subscription.unsubscribe()
  }
}
