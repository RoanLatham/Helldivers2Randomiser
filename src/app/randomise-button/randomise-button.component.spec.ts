import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomiseButtonComponent } from './randomise-button.component';

describe('RandomiseButtonComponent', () => {
  let component: RandomiseButtonComponent;
  let fixture: ComponentFixture<RandomiseButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomiseButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RandomiseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
