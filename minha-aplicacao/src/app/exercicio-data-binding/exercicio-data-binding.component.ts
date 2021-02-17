import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.scss']
})
export class ExercicioDataBindingComponent implements OnInit {
  imageURL = 'https://image.winudf.com/v2/image1/Y29tLnRhbWFyYWFwcHMuY3V0ZWxpdHRsZWtpdHRlbnNfc2NyZWVuXzRfMTU1ODgxNDI0Nl8wNDc/screen-4.jpg?fakeurl=1&type=.jpg';
  initialValue = 'Valor inicial';
  isDisabled = true;
  accessibilityText = 'Um texto acessível';


  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
      console.log('isDisabled: ', this.isDisabled);
    }, 3000);
  }

  ngOnInit(): void {
  }


}
