import { ToDo } from "@dhx/trial-todolist";
import { getData } from "./data";

import {
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: "todo",
  styleUrls: ["./todo.component.css"],
  template: `<div #here class="widget"></div>`,
})
export class ToDoComponent implements OnInit, OnDestroy {
  @ViewChild("here", { static: true }) container!: ElementRef;

  private _todo!: ToDo;

  ngOnInit() {
    const { users, tasks, projects } = getData();
    const todo = new ToDo(this.container.nativeElement, {
      users,
      tasks,
      projects,
    });

    this._todo = todo;
  }

  ngOnDestroy(): void {
    this._todo.destructor();
  }
}
