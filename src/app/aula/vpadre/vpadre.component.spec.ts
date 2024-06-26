import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VPadreComponent } from './vpadre.component';
import { RouterTestingModule } from '@angular/router/testing'; // Necesario para el Router
import { NgForOf, NgIf } from '@angular/common';

describe('VPadreComponent', () => {
  let component: VPadreComponent;
  let fixture: ComponentFixture<VPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, NgForOf, NgIf],
      declarations: [VPadreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle isVisible property', () => {
    component.mostrarCursos();
    expect(component.isVisible).toBeTrue();
    component.mostrarCursos();
    expect(component.isVisible).toBeFalse();
  });

  it('should add a new course when valid course code is provided', () => {
    const initialCourseCount = component.courses.length;
    component.joinCourse('COURSE123');
    expect(component.courses.length).toBe(initialCourseCount + 1);
    expect(component.courses[initialCourseCount].nombre).toBe('Nombre del Curso');
  });

  it('should not add a new course when invalid course code is provided', () => {
    const initialCourseCount = component.courses.length;
    component.joinCourse('INVALID_CODE');
    expect(component.courses.length).toBe(initialCourseCount);
    expect(component.errorMessage).toBe('Código de curso inválido.');
  });
});
