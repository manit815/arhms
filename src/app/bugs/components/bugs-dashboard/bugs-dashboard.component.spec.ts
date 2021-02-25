import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugsDashboardComponent } from './bugs-dashboard.component';

describe('BugsDashboardComponent', () => {
  let component: BugsDashboardComponent;
  let fixture: ComponentFixture<BugsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
