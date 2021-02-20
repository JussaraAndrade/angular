import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-pipes',
  templateUrl: './exercicio-pipes.component.html',
  styleUrls: ['./exercicio-pipes.component.scss']
})
export class ExercicioPipesComponent {

  filme = {
    titulo: 'Harry Potter - A pedra filosofal',
    estrelas: 4.456456456,
    precoAlugel: 15.45,
    dataLancamento: new Date(2019, 5, 30),
  };

}
