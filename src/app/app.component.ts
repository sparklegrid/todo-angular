import {Component} from '@angular/core';
import {AppService} from './app.service';

export class Todo {
  id: number;
  title?: string;
  desc?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo Application';
  todos: Todo[];
  todo: Todo = new Todo();

  constructor(private appService: AppService) {
    this.getTodos();
  }

  getTodos() {
    this.appService.getTodos()
      .subscribe(
        todos => {
          if (todos) {
            this.todos = todos;
          }
        }
      );
  }

  addTodo() {
    this.appService.addTodo(this.todo)
      .subscribe(
        todo => {
          if (todo) {
            alert('Todo item created successfully!');
            this.todo = new Todo();
            this.todos.push(todo);
          }
        }
      );
  }

  deleteTodo(id: number) {
    this.appService.deleteTodo(id)
      .subscribe(
        response => {
          alert(response);
        }
      );
  }
}
