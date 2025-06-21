import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableuidComponent } from './tableuid.component';

describe('TableuidComponent', () => {
  let component: TableuidComponent;
  let fixture: ComponentFixture<TableuidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableuidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableuidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
