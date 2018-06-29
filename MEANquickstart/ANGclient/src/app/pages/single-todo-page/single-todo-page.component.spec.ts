import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTodoPageComponent } from './single-todo-page.component';

describe('SingleTodoPageComponent', () => {
  let component: SingleTodoPageComponent;
  let fixture: ComponentFixture<SingleTodoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleTodoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTodoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
