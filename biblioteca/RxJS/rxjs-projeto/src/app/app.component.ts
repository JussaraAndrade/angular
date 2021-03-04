import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map, take } from 'rxjs/operators';



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
    //this.getTransacoes()
    //Evita vazação de memória
     // .pipe(
        //Pegar apenas um único dado, e encerra.
       // take(1),
       // map(response => {
        //  return response.map((element: any) => {
        //    element.id = element.id * 10;
        //    return element;
        //  });
      //  })
     // )
      //Escuta
    //  .subscribe(response => {
      //  console.log('Response: ', response);
     // });
    console.log('Chamou a API...')
    this.getIdDoUsuario()
     .pipe(
      take(1),
     )
      .subscribe(response =>{
        console.log('Response: ', response);
      });
  }

  //Transformar um dado em Observable: of
  getIdDoUsuario(){
    //Chamada assincrona, resolvido imediatamente
    return of('1001')
      .pipe(
        delay(1000),
        //mapeamento
        map(response => response as any * 10),
      );
    //return this.http.get('https://my-json-server.typicode.com/vitorfgsantos/fake-api/transacoes');
  }

  getTransacoes(): Observable<any>{
    return this.http.get('https://my-json-server.typicode.com/vitorfgsantos/fake-api/transacoes');
  }

  getContatos(){
    return this.http.get('https://my-json-server.typicode.com/vitorfgsantos/fake-api/contatos');
  }

}
