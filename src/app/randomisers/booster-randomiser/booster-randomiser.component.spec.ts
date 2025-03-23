import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoosterRandomiserComponent } from './booster-randomiser.component';

describe('BoosterRandomiserComponent', () => {
  let component: BoosterRandomiserComponent;
  let fixture: ComponentFixture<BoosterRandomiserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoosterRandomiserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoosterRandomiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
