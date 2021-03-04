import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, zip } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rxjs-projeto';

  constructor(
    private http: HttpClient,
    ) {}

  chamarAPI() {
    zip(
      this.getTransacoes(),
      this.getContatos(),
    )
    .subscribe(([responseTransacoes, responseContatos]) =>{
      console.log(responseTransacoes);
      console.log(responseContatos);
    })
  }

  getTransacoes(): Observable<any> {
    return this.http.get(
      'https://my-json-server.typicode.com/vitorfgsantos/fake-api/transacoes'
    );
  }

  getContatos() {
    return this.http.get(
      'https://my-json-server.typicode.com/vitorfgsantos/fake-api/contatos'
    );
  }
}
