import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';

/*
Decorator @Component nele pode adicionar vários informações isso é Metadados (que são informações a mais da classe)
Obs:Ele vai dizer quem é o selector, templateUrl e o styleUrls
*/
@Component({
  //Define o seletor do compoenente
  selector: 'app-header',
  //Define a URL do template do componente
  templateUrl: './header.component.html',
  //Define a URLs de estilo do componente
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnChanges, OnInit, AfterViewInit {
  /*Valor default
  @Input() title = 'Seja bem-vindo!'
  */
  @Input() title!: string;

  constructor() {
    console.log('Construtor');
  }

  /*
  Eventos do Ciclo de Vida dos compoenentes:

  - Disparo de circulo de vida, seguem uma ordem.
  - Construtor da classe é a primeira função vai ser chamado.

  hooks:
  ngOnChanges; ele vai verificar alguma mudanças de variáveis e estado de variáveis.
  ngOnInit; hook de inicialização
  ngDoCheck; toda vez que ocorre uma mudança ele também vai disparar o check
  ngOnDestroy; a partir do componente a ser destruido. NgIf fica falso esse evento é disparado.
  */

  //hooks
  ngOnChanges() {
    console.log('ngOnChanges');
  }
  //hooks
  ngOnInit(): void {
    console.log('ngOnInit');
  }
  //hooks
  ngAfterViewInit() {
    console.log('ngAfterContentInit');
  }
  //Somente quando ele for sair da tela, sumir.
  ngOnDestroy(){
    console.log('Fui destruído!!');
  }
}
