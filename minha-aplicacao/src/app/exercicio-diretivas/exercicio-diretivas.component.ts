import { Component } from '@angular/core';

import { MEMES_AGRUPADOS_POR_CATEGORIA } from './exercicio-diretivas.constants';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.scss'],
})
export class ExercicioDiretivasComponent {
  //Array
  listaFrutas = ['Maçâ', 'Laranja', 'Mamão', 'Pêra'];

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
    },
  ];

  deveExibir = false;

  PREFIXO_IMAGEM_URL = 'https://raw.githubusercontent.com/vitorfgsantos/angular-memes-diretivas/master/images';
  //Importando arquivo exercicio-diretivas.constants.ts para o componente exercicio-diretivas.component.ts
  MEMES_AGRUPADOS_POR_CATEGORIA = MEMES_AGRUPADOS_POR_CATEGORIA;

  trocarValor() {
    this.deveExibir = !this.deveExibir;
  }

  soma(numero1: number, numero2: number) {
    return numero1 + numero2;
  }
}
