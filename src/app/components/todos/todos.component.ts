import { Todo } from "./../../models/Todo";
import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  constructor() {}
  todos: Todo[];

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        title: "Todo One",
        completed: true
      },
      {
        id: 2,
        title: "Todo two",
        completed: false
      },
      {
        id: 3,
        title: "Todo three",
        completed: true
      }
    ];
  }
}
