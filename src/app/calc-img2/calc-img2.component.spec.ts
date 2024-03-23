import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcIMG2Component } from './calc-img2.component';

describe('CalcIMG2Component', () => {
  let component: CalcIMG2Component;
  let fixture: ComponentFixture<CalcIMG2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalcIMG2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalcIMG2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
