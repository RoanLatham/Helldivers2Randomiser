import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StratagemRandomiserComponent } from './stratagem-randomiser.component';

describe('StratagemRandomiserComponent', () => {
  let component: StratagemRandomiserComponent;
  let fixture: ComponentFixture<StratagemRandomiserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StratagemRandomiserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StratagemRandomiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
