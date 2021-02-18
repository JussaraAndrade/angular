import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.scss'],
})
export class ExercicioDataBindingComponent implements OnInit {
  //Decoretor @input
  /*
    @Input; para receber informações
   */
  @Input() palavra!: string;
  @Input() color!: string;

  /*
    @Output; para emitir informações

    Atenção:
    EventEmitter - importa do angular core. É uma variavel emissor de eventos.
  */
 @Output() clicado = new EventEmitter();

  imageURL =
    'https://image.winudf.com/v2/image1/Y29tLnRhbWFyYWFwcHMuY3V0ZWxpdHRsZWtpdHRlbnNfc2NyZWVuXzRfMTU1ODgxNDI0Nl8wNDc/screen-4.jpg?fakeurl=1&type=.jpg';
  initialValue = 'Valor inicial';
  isDisabled = true;
  accessibilityText = 'Um texto acessível';
  valorDoInput = '';

  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
      console.log('isDisabled: ', this.isDisabled);
    }, 3000);
  }

  ngOnInit(): void {}

  onClick($event: any) {
    console.log('clicou!', $event);
  }

  digitouAlgo($event: any) {
    this.valorDoInput = $event.target.value;
    console.log($event);
  }

  passouMouse() {
    console.log('alguém passou o mouse');
  }

  onClickBotaoEmissor($event: any){
    console.log('Devo emitir informações para o componente pai.', $event);
    //Emite o evento: emit() dentro pode passar string, boolean ou proprio evento de clique.
    //Recebo evento de clique emite componente pai
    this.clicado.emit();
  }

  onValorAtualizadoNoContador(novoValor: any){
    console.log('onValorAtualizadoNoContador: ', novoValor);
  }

}
