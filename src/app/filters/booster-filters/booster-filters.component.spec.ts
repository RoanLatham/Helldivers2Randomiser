import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoosterFiltersComponent } from './booster-filters.component';

describe('BoosterFiltersComponent', () => {
  let component: BoosterFiltersComponent;
  let fixture: ComponentFixture<BoosterFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoosterFiltersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoosterFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
