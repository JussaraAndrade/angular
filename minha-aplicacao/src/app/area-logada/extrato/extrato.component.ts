import { Component, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs/operators';

import { Transacao } from './extrato.interfaces';
import { ExtratoService } from './extrato.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  //Tipagem
  transacoes!: Transacao[];

  estaCarregando!: boolean;
  erroNoCarregamento!: boolean;
  pagina = 1;


  constructor(private extratoService: ExtratoService) {}

  ngOnInit(): void {
    //Chamar a função
    this.carregarExtrato();
  }

  carregarExtrato(){
    //Quanto estive carregando é true - irá aparecer spinner
    this.estaCarregando = true;
    this.erroNoCarregamento = false;
    this.extratoService.getTransacoes(this.pagina)
      .pipe(

        take(1),
        finalize(() =>

          this.estaCarregando = false)
      )

      .subscribe(
        response => this.onSucesso(response),
        error => this.onError(error),

      );
  }

  onSucesso(response: Transacao[]){

     this.transacoes = response;
  }

  onError(error: any){
    this.erroNoCarregamento = true;
    console.error(error);
  }

  paginaAnterior(){
    this.pagina = this.pagina - 1;
    this.carregarExtrato();
  }

  proximaPagina(){
    this.pagina = this.pagina + 1;
    this.carregarExtrato();
  }
}
