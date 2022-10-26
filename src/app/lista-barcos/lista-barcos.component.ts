import { Component, OnInit } from '@angular/core';
import { Barco } from '../Barco';
import { BARCOS } from '../mock-barcos';

@Component({
  selector: 'app-lista-barcos',
  templateUrl: './lista-barcos.component.html',
  styleUrls: ['./lista-barcos.component.css']
})
export class ListaBarcosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedBarco?: Barco;
  barcos : Barco[] = BARCOS;

  onSelect(barco: Barco): void {
    this.selectedBarco = barco;
  }
}
