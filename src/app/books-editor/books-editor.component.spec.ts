import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksEditorComponent } from './books-editor.component';

describe('BooksEditorComponent', () => {
  let component: BooksEditorComponent;
  let fixture: ComponentFixture<BooksEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
