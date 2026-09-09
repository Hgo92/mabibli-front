import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryHome } from './library-home';

describe('LibraryHome', () => {
  let component: LibraryHome;
  let fixture: ComponentFixture<LibraryHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryHome],
    }).compileComponents();

    fixture = TestBed.createComponent(LibraryHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
