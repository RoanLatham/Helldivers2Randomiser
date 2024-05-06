import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoosterDisplayComponent } from './booster-display.component';

describe('BoosterDisplayComponent', () => {
  let component: BoosterDisplayComponent;
  let fixture: ComponentFixture<BoosterDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoosterDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoosterDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
