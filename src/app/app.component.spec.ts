import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NotificationComponent } from './features/notification/components/notification/notification.component';
import { NotificationService } from './features/notification/services/notification.service';
import { BehaviorSubject } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let notificationService: NotificationService;
  let notificationStateSubject: BehaviorSubject<any>;

  beforeEach(async () => {
    notificationStateSubject = new BehaviorSubject<any>({});
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        NotificationComponent
      ],
      providers: [
        { provide: NotificationService, useValue: {
          notificationState: notificationStateSubject.asObservable(),
          updateNotificationState: jest.fn()
        }}
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    notificationService = TestBed.inject(NotificationService);
    fixture.detectChanges();
  });

  afterEach(() => {
    notificationStateSubject.complete();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render the notification component', () => {
    const notificationComponent = fixture.debugElement.query(By.directive(NotificationComponent));
    expect(notificationComponent).toBeTruthy();
  });

  // Ajoutez d'autres tests ici
});
