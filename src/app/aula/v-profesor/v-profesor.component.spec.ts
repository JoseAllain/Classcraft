import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VProfesorComponent } from './v-profesor.component';

describe('VProfesorComponent', () => {
  let component: VProfesorComponent;
  let fixture: ComponentFixture<VProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VProfesorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
