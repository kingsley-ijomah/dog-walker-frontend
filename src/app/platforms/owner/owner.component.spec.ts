import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OwnerComponent } from './owner.component';

describe('OwnerComponent', () => {
  let component: OwnerComponent;
  let fixture: ComponentFixture<OwnerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [OwnerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
