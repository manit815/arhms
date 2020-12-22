import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TribesComponent } from './tribes.component';

describe('TribesComponent', () => {
  let component: TribesComponent;
  let fixture: ComponentFixture<TribesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TribesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TribesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
