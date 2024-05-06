import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StratagemFiltersComponent } from './stratagem-filters.component';

describe('StratagemFiltersComponent', () => {
  let component: StratagemFiltersComponent;
  let fixture: ComponentFixture<StratagemFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StratagemFiltersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StratagemFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
