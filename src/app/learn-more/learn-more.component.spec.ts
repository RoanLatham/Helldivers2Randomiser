import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMoreComponent } from './learn-more.component';

describe('LearnMoreComponent', () => {
  let component: LearnMoreComponent;
  let fixture: ComponentFixture<LearnMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnMoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearnMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
