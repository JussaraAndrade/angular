import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({

  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnChanges, OnInit, AfterViewInit {

  @Input() title!: string;

  constructor() {
    console.log('Construtor');
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngAfterViewInit() {
    console.log('ngAfterContentInit');
  }

  ngOnDestroy(){
    console.log('Fui destruído!!');
  }

  estaLogado(){

  }
}
