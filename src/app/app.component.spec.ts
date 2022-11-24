import { AppComponent } from './app.component';
import { TestBed } from '@angular/core/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    // ARRANGE
    // ACT
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    // ASSERT
    expect(app).toBeTruthy();
  });

  it(`should have as title 'advanced-angular-app'`, () => {
    // ARRANGE

    // ACT
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    // ASSERT
    expect(app.title).toEqual('advanced-angular-app');
  });

  it('should render title', () => {
    // ARRANGE

    // ACT
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    // ASSERT
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'advanced-angular-app app is running!'
    );
  });
});
