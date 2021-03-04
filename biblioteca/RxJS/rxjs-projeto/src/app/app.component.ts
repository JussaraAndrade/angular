import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { take } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs-projeto';

  constructor(
    private http: HttpClient,
  ){}

  chamarAPI(){
    this.getTransacoes()
    //Evita vazação de memória
      .pipe(
        //Pegar apenas um único dado, e encerra.
        take(1)
      )
      //Escuta
      .subscribe(response => {
        console.log('Response: ', response);
      });
  }

  getTransacoes(){
    return this.http.get('https://my-json-server.typicode.com/vitorfgsantos/fake-api/transacoes');
  }

  getContatos(){
    return this.http.get('https://my-json-server.typicode.com/vitorfgsantos/fake-api/contatos');
  }



}
