import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StratagemDisplayComponent } from './stratagem-display.component';
import { Stratagem, stratagems } from '../../services/stratagems';
import { By } from '@angular/platform-browser';

describe('StratagemDisplayComponent', () => {
  let component: StratagemDisplayComponent;
  let fixture: ComponentFixture<StratagemDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StratagemDisplayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StratagemDisplayComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // Set a valid ID before detecting changes to avoid errors
    component.id = stratagems[0].id;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('setting id input property', () => {
    it('should update the stratagem when id is set', () => {
      // Arrange - Get a test stratagem
      const testStratagem = stratagems[0];

      // Act - Set the id
      component.id = testStratagem.id;
      fixture.detectChanges();

      // Assert - Verify the stratagem was updated
      expect(component.stratagem).toBeDefined();
      expect(component.stratagem.id).toEqual(testStratagem.id);
      expect(component.stratagem.name).toEqual(testStratagem.name);
    });

    it('should log an error for an invalid stratagem ID', () => {
      // Arrange
      spyOn(console, 'error');

      // Initialize stratagem with a default value to prevent template errors
      component.stratagem = stratagems[0]; // Set a default before changing to invalid ID

      // Act - Set an invalid ID
      component.id = 9999; // Assuming 9999 is not a valid ID
      fixture.detectChanges();

      // Assert - Verify an error was logged
      expect(console.error).toHaveBeenCalledWith(
        'No stratagem found with ID 9999'
      );
    });
  });

  describe('template rendering', () => {
    // Name is not  currently displayed for this UI element
    // it('should display the stratagem name', () => {
    //   // Arrange - Set up a test stratagem
    //   const testStratagem = stratagems[0];
    //   component.id = testStratagem.id;
    //   fixture.detectChanges();

    //   // Act - Get elements that might display the name
    //   const nameElements = fixture.debugElement.queryAll(
    //     By.css('.stratagem-name, h3, .name')
    //   );

    //   // Assert - Verify the name is displayed somewhere
    //   const nameDisplayed = nameElements.some((elem) =>
    //     elem.nativeElement.textContent.includes(testStratagem.name)
    //   );
    //   expect(nameDisplayed).toBeTrue();
    // });

    it('should display the stratagem icon', () => {
      // Arrange - Set up a test stratagem
      const testStratagem = stratagems[0];
      component.id = testStratagem.id;
      fixture.detectChanges();

      // Act - Get the image element
      const imgElement = fixture.debugElement.query(
        By.css('img.stratagem-icon, img')
      );

      // Assert - Verify the image path contains the expected filename
      expect(imgElement).toBeTruthy();
      // Instead of checking for exact path, check if path ends with the expected part
      const src = imgElement.nativeElement.src;
      const expectedEndPath = testStratagem.iconPath.replace('./', '');
      expect(
        src.endsWith(expectedEndPath) || src.includes(expectedEndPath)
      ).toBeTrue();
    });
  });

  describe('ngOnInit', () => {
    it('should call updateStratagem on initialization', () => {
      // Arrange
      spyOn(component, 'updateStratagem');

      // Act
      component.ngOnInit();

      // Assert
      expect(component.updateStratagem).toHaveBeenCalled();
    });
  });

  describe('updateStratagem', () => {
    it('should find stratagem by ID', () => {
      // Arrange - Spy on the find method
      spyOn(stratagems, 'find').and.callThrough();

      // Act
      component.id = stratagems[0].id;
      component.updateStratagem();

      // Assert
      expect(stratagems.find).toHaveBeenCalled();
      expect(component.stratagem.id).toEqual(stratagems[0].id);
    });

    it('should handle a not found stratagem gracefully', () => {
      // Arrange
      spyOn(console, 'error');

      // Set a default stratagem to prevent template errors
      component.stratagem = stratagems[0];

      // Act - Use an ID that doesn't exist
      component.id = 9999;
      component.updateStratagem();

      // Assert
      expect(console.error).toHaveBeenCalledWith(
        'No stratagem found with ID 9999'
      );
    });
  });
});
