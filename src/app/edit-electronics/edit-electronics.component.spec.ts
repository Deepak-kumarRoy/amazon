import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditElectronicsComponent } from './edit-electronics.component';

describe('EditElectronicsComponent', () => {
  let component: EditElectronicsComponent;
  let fixture: ComponentFixture<EditElectronicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditElectronicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditElectronicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
