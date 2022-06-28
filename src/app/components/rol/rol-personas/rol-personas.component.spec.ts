import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolPersonasComponent } from './rol-personas.component';

describe('RolPersonasComponent', () => {
  let component: RolPersonasComponent;
  let fixture: ComponentFixture<RolPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolPersonasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
