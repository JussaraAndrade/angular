import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Transacao } from './extrato.interfaces';

/*
decoretor:
@Injectable - dentro tem um parametro que está dizendo providedIn em 'root' */
@Injectable({
  providedIn: 'root',
})

/*
Conceitos Serviços:

Um "Componente" vai consultar um "Serviço (Service)" essa service pode ser injetada em outras services.
Essa service pode consultar um backend, fazer uma chamada http.

Injeção de dependência:

Ela é responsavel por fazer que qualquer dependencia que tem na aplicação a ser injetada o angular
automaticamente resolva, e injeta sem precisa ficar fazendo instancia: new ....

Lembrando que:
- Uma Serivice torna-se injetável quando acompanhada do decorator @Injectable.

*/
export class ExtratoService {
  //Injeção dependência do httpClient
  constructor(private http: HttpClient) {}

  getTransacoes() {
    /*Requisição get

    <{}> - retorna uma array do objeto
    */
    return this.http.get<Transacao[]>(
      'http://my-json-server.typicode.com/vitorfgsantos/fake-api/transacoes'
    );
  }
}
