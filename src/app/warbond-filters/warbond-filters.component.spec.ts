import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarbondFiltersComponent } from './warbond-filters.component';

describe('WarbondFiltersComponent', () => {
  let component: WarbondFiltersComponent;
  let fixture: ComponentFixture<WarbondFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarbondFiltersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WarbondFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
