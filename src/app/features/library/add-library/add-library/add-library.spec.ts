import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddLibrary } from './add-library';

describe('AddLibrary', () => {
  let component: AddLibrary;
  let fixture: ComponentFixture<AddLibrary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddLibrary],
    }).compileComponents();

    fixture = TestBed.createComponent(AddLibrary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
