import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugsMenuComponent } from './bugs-menu.component';

describe('BugsMenuComponent', () => {
  let component: BugsMenuComponent;
  let fixture: ComponentFixture<BugsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugsMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
