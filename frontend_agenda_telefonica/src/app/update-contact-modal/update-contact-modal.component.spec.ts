import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateContactModalComponent } from './update-contact-modal.component';

describe('UpdateContactModalComponent', () => {
  let component: UpdateContactModalComponent;
  let fixture: ComponentFixture<UpdateContactModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateContactModalComponent]
    });
    fixture = TestBed.createComponent(UpdateContactModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
