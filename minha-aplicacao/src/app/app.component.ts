import { Component } from '@angular/core';

/*
@Component:

selector; chama esse compoente pelo app-root, esse compoenente tem um templateUrl que tem uma ligação um com outro.
stylesUrls; definir os estilos para esse compoentes.
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

/*
  Um compoente tem uma classe, pode ter funções, variáveis, chamar outras classes e métodos.
*/
export class AppComponent {
  //Variáveis da classe
  //title = 'Seja Bem-vindo!';

  /*
  titulo = 'Titulo em PT';
  meuNumero = 10;*/

  /*
    Criando uma função, o construtor da classe.
    - construtor de uma classe é a primeira função vai ser executada quando a classe é iniciada/instanciada
    Obs: Quando essa classe surgir ela irá aparecer no constructor(){}
  */
  constructor() {


    /*
    console.log('Passei por aqui!');

     arrow function:

      setTimeout(() =>{
      console.log('PASSA AQUI DEPOIS DE 3')
    }, 3000)
    }

    setTimeout(() =>{
      //referencia this altera a variavel da classe
      this.titulo = 'titulo foi mudado depois de 3 segundos';
      this.meuNumero = 100;
      console.log('PASSA AQUI DEPOIS DE 3')
    }, 3000)*/
  }

  /*
    Essa função é a mesma coisa que:

    function sum(){}

    *Raramente irá aparecer o function

  sum(number1: number, number2:number){
    return number1 + number2;
  }*/
}
