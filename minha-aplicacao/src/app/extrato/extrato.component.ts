import { Component, OnInit } from '@angular/core';

import { ExtratoService } from './extrato.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  //Array de Objeto
  transacoes:any = [];

  /*
   Importe, e depois instancia dentro do constructor: ExtratoService do serviço (extrato.service.ts):
  extratoService: any;
   */

  /*
    #Services e Injeção de Dependência

    - Depedência injetada pelo Injector do Angular:
    constructor(private extratoService: ExtratoService) {}

    - Uma vez injetada, a dependência torna-se disponível para ser utilizada pelo Component:
    ngOnInit(): void {
    this.transacoes = this.extratoService.getTransacoes();
     }

     Dentro do constructor, ela tem tanta outra service de back end tanto a service de log.
     Pode ter diversas injeções para uma mesma service no constructor:

     constructor(private backend: BackendService, private logger: Logger) {}

  */
  constructor(private extratoService: ExtratoService) {

  }

  ngOnInit(): void {
    this.transacoes = this.extratoService.getTransacoes();
  }

}
