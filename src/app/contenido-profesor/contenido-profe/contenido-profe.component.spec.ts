import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoProfeComponent } from './contenido-profe.component';

describe('ContenidoProfeComponent', () => {
  let component: ContenidoProfeComponent;
  let fixture: ComponentFixture<ContenidoProfeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenidoProfeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContenidoProfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
