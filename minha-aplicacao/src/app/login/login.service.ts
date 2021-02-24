import { Injectable } from '@angular/core';
import { of, throwError, timer } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  logar(email: string, senha: string) {
    //return this.http.post(this.API_URL + '/contatos', contato, this.httpOptions);
    if (email === 'teste@teste.com' && senha === '123') {
      return of({
        usuario: {
          nome: 'Vitor',
          sobrenome: 'Farias',
          email: 'teste@teste.com',
        },
        token: 'SD987GA97G9DF7G9D9AGD',
      }).pipe(
        delay(2000)
        );
    }

    return timer(3000).pipe(
      mergeMap(() => throwError('Usuário ou senha incorretos.'))
    );
  }
}
