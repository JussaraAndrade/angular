import { Injectable } from '@angular/core';

/*
decoretor:
@Injectable - dentro tem um parametro que está dizendo providedIn em 'root' */
@Injectable({
  providedIn: 'root'
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

  constructor() {}

  getTransacoes(){
    //TODO: Consulta um api verdadeira
    return[{
      id: 1,
      data: "2020-02-04T13:00:24.744Z",
      descricao: "Salário",
      valor: 3500,
      categoria: "Salário"
    },
    {
      id: 2,
      data: "2020-02-05T14:21:24.744Z",
      descricao: "Sapato Verde",
      valor: -235.99,
      categoria: "Vestuário"
    },
    {
      id: 3,
      data: "2020-01-29T15:00:24.744Z",
      descricao: "Notebook",
      valor: -10231.99,
      categoria: "Eletrônicos"
    }]
  }
}
