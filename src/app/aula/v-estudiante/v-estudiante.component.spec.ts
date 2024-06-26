import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VEstudianteComponent } from './v-estudiante.component';

describe('VEstudianteComponent', () => {
  let component: VEstudianteComponent;
  let fixture: ComponentFixture<VEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VEstudianteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
