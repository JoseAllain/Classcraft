import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VDatosUsuarioComponent } from './v-datos-usuario.component';

describe('VDatosUsuarioComponent', () => {
  let component: VDatosUsuarioComponent;
  let fixture: ComponentFixture<VDatosUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VDatosUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VDatosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
