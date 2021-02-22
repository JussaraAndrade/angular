import '@angular/common/locales/global/pt';

import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { SharedModule } from './shared/shared.module';

registerLocaleData(localePt, 'pt');

//Adiciona o componente no módulo principal da aplicação

/*
  @NgModule - é um decoretor que vai marcar no angular essa classe é uma classe de módulo
*/
@NgModule({

  /*
    declarations:

    - Modulos de funcionalidade
    - Recebem meta dados
    - declarations; recebem os componentes, diretivas e pipes para serem declarados
  */
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ExtratoComponent,
    NaoEncontradoComponent,
  ],

  /*
  imports:

  - são importações de outros módulos.
  - pode trazer outros módulos e importação aqui
  - os módulos são importados automaticamente
  */
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Importar HttpClientModule
    HttpClientModule,
    SharedModule,

  ],

  /*
  providers:

  - normalmente colocam as services
  - consegue prover valores

  */
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt'
  }],
  /*
  bootstrap:

  - meta dados; inicializa a aplicação, ele só existe nesse módulo.
  */
  bootstrap: [AppComponent]
})
//Módulo principal
export class AppModule { }
