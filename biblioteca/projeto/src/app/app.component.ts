import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private modalService: NgbModal) {}
  public myModel = ''
  public mask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/ ,/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]


  open(content: any) {
    this.modalService.open(content).result.then((result) => {
      console.log('Close: ', result);
    });
  }

}
