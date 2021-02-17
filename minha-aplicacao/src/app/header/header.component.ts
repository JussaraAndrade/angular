import { Component, OnInit } from '@angular/core';

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
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Seja bem-vindo!'

  constructor() { }

  ngOnInit(): void {
  }

}
