import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NotificationComponent } from './notification.component';
import { NotificationService } from '../../services/notification.service';
import { BehaviorSubject } from 'rxjs';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

describe('NotificationComponent', () => {
  let component: NotificationComponent;
  let fixture: ComponentFixture<NotificationComponent>;
  let notificationService: NotificationService;
  let notificationStateSubject: BehaviorSubject<any>;

  beforeEach(async () => {
    notificationStateSubject = new BehaviorSubject<any>({});
    await TestBed.configureTestingModule({
      imports: [CommonModule, NotificationComponent], // Import CommonModule to use NgIf in standalone component
      providers: [
        { provide: NotificationService, useValue: {
          notificationState: notificationStateSubject.asObservable(),
          updateNotificationState: jest.fn((val: any) => {
            notificationStateSubject.next(val);
            setTimeout(() => {
              notificationStateSubject.next({});
            }, 3000);
          })
        }}
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationComponent);
    component = fixture.componentInstance;
    notificationService = TestBed.inject(NotificationService);
    fixture.detectChanges();
  });

  afterEach(() => {
    notificationStateSubject.complete();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update notification content and type when service emits a new state', () => {
    const testNotification = { content: 'Test notification', type: 'success' };
    notificationStateSubject.next(testNotification);
    fixture.detectChanges();

    expect(component.content).toEqual(testNotification.content);
    expect(component.type).toEqual(testNotification.type);
  });

  it('should clear notification after timeout', done => {
    const testNotification = { content: 'Test notification', type: 'success' };

    // Use the service method to update the state and trigger the reset
    notificationService.updateNotificationState(testNotification);
    fixture.detectChanges();

    expect(component.content).toEqual(testNotification.content);
    expect(component.type).toEqual(testNotification.type);

    setTimeout(() => {
      fixture.detectChanges();
      expect(component.content).toBeUndefined();
      expect(component.type).toBeUndefined();
      done();
    }, 3000);
  })
});
