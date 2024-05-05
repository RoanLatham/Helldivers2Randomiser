import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StratagemDisplayComponent } from './stratagem-display.component';

describe('StratagemDisplayComponent', () => {
  let component: StratagemDisplayComponent;
  let fixture: ComponentFixture<StratagemDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StratagemDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StratagemDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
