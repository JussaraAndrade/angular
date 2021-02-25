import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss'],
})


export class AppComponent {
  pudim = 'uma palavra';
  favoriteColor = 'green';
  title = 'Seja bem-vindo! =)';

  constructor() {}

  eventoRecebido($event: any) {
    console.log('AppComponent: EVENTO RECEBIDO!', $event);
  }

}
