import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarduidComponent } from './carduid.component';

describe('CarduidComponent', () => {
  let component: CarduidComponent;
  let fixture: ComponentFixture<CarduidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarduidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarduidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
