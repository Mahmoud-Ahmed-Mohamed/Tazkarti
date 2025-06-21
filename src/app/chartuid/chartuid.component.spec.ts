import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartuidComponent } from './chartuid.component';

describe('ChartuidComponent', () => {
  let component: ChartuidComponent;
  let fixture: ComponentFixture<ChartuidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartuidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartuidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
