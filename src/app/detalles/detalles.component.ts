import { Component, Input, OnInit } from '@angular/core';
import { Barco } from '../Barco';
import { ListaBarcosComponent } from '../lista-barcos/lista-barcos.component';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  
  @Input() barco? : Barco;

  constructor() { }

  ngOnInit(): void {
  }

}
