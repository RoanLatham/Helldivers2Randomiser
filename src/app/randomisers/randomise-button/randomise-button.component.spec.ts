import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RandomiseButtonComponent } from './randomise-button.component';
import { By } from '@angular/platform-browser';

describe('RandomiseButtonComponent', () => {
  let component: RandomiseButtonComponent;
  let fixture: ComponentFixture<RandomiseButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomiseButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RandomiseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should emit randomise event when button is clicked', () => {
    // Arrange
    spyOn(component.randomise, 'emit');
    const button = fixture.debugElement.query(By.css('button'));

    // Act
    button.triggerEventHandler('click', null);

    // Assert
    expect(component.randomise.emit).toHaveBeenCalled();
  });
});
