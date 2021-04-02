import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugsTechnologyComponent } from './bugs-technology.component';

describe('BugsTechnologyComponent', () => {
  let component: BugsTechnologyComponent;
  let fixture: ComponentFixture<BugsTechnologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugsTechnologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugsTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
