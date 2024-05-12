import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponRandomiserComponent } from './weapon-randomiser.component';

describe('WeaponRandomiserComponent', () => {
  let component: WeaponRandomiserComponent;
  let fixture: ComponentFixture<WeaponRandomiserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaponRandomiserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeaponRandomiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
