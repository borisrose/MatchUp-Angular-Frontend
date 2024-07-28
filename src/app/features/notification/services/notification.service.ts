import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private _notificationState: BehaviorSubject<any> = new BehaviorSubject<any>({});
  public readonly notificationState: Observable<any> = this._notificationState.asObservable();

  constructor() {}

  updateNotificationState(val: any) {
    this._notificationState.next(val);
    setTimeout(() => {
      this._notificationState.next({});
    }, 3000);
  }
}
