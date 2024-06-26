import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEComponent } from './modal-e.component';

describe('ModalEComponent', () => {
  let component: ModalEComponent;
  let fixture: ComponentFixture<ModalEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalEComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
