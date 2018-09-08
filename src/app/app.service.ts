import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AppConfig} from './app.config';
import {Todo} from './app.component';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private readonly todoUrl = AppConfig.API_URL + '/todo';

  constructor(private http: HttpClient) {
  }

  /** GET: get the list of all videos */
  getTodos(): Observable<Todo[]> {
    return this.http.get<any>(this.todoUrl)
      .pipe(
        map(response => response['data']['todos']),
      );
  }


  addTodo(todo: any): Observable<any> {
    return this.http.post<any>(`${this.todoUrl}/add`, todo)
      .pipe(
        map(response => response['data']['todo']),
      );
  }


  deleteTodo(id: number): Observable<any> {
    return this.http.delete<number>(`${this.todoUrl}/delete/${id}`)
      .pipe(
        map(response => response['data']),
      );
  }
}
