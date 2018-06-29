/*
Imports
*/
  import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
  import { Router } from "@angular/router";

  import { TodoModel } from "../../../models/todo.model";
//

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: [`
    ul{ display: flex; list-style: none }
    button{ padding: .7rem; font-size: 1rem; text-transform: uppercase; line-height: 1; margin-right: 1rem; height: auto; }
    p{ margin-bottom: .5rem; }
  `]
})
export class TodoItemComponent implements OnInit {

  // Variables
  @Input() todo: TodoModel;
  @Output() todoInfos = new EventEmitter;

  constructor(
    private router: Router
  ) { }

  public sendTodoId = ( actionParam: string ) => {
    this.todoInfos.emit( { _id: this.todo._id, action: actionParam } )
  }

  ngOnInit() {
  }

}
