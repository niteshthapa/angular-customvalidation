import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailimputComponent } from './emailimput.component';

describe('EmailimputComponent', () => {
  let component: EmailimputComponent;
  let fixture: ComponentFixture<EmailimputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailimputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailimputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
