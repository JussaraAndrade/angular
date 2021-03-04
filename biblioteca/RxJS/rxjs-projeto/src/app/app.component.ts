import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, mergeMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rxjs-projeto';

  constructor(private http: HttpClient) {}

  chamarAPI() {
    console.log('Chamou a API...');
    //1 - vai chamar id do usuário: (getIdDoUsuario) em 1 segundo
    this.getIdDoUsuario()
      //Evita vazação de memória
      .pipe(
        //Pega apenas um único dado, e encerra.
        take(1),
        //2- depois remapear para getTransacoes
        mergeMap(idUsuario => {
          console.log('idUsuario: ', idUsuario);
          return this.getTransacoes(idUsuario);
        })
      )
      //3 - quando for concluido irá cair nesse response final
      .subscribe((response) => {
        console.log('Response final: ', response);
      });
  }

  //Transformar um dado em Observable: of
  getIdDoUsuario(): Observable<string> {
    //Observable retorna uma string
    //Chamada assincrona, resolvido imediatamente
    return of('1001').pipe(delay(1000));
  }

  getTransacoes(idUsuario: string): Observable<any> {
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
