import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFromComponent } from './todo-from.component';

describe('TodoFromComponent', () => {
  let component: TodoFromComponent;
  let fixture: ComponentFixture<TodoFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
