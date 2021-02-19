import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.scss']
})
export class ExercicioDiretivasComponent {
  //Array
  listaFrutas = [
    'Maçâ',
    'Laranja',
    'Mamão',
    'Pêra',
  ];

  //Array de Objeto
  carrosLista = [
    {
      placa: 'JND-7438',
      cor: 'Preto',
    },
    {
      placa: 'JGG-20394',
      cor: 'Azul',
    },
    {
      placa: 'JND-1230',
      cor: 'Branco',
    },
    {
      placa: 'OGK-7095',
      cor: 'Vermelho',
    }
  ];


  deveExibir = false;

  trocarValor(){
    this.deveExibir = !this.deveExibir;
  }

  soma(numero1: number, numero2: number){
    return numero1 + numero2;
  }
}
