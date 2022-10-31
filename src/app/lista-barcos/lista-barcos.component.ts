import { Component, OnInit } from '@angular/core';
import { Barco } from '../Barco';
import { BuquesService } from '../buques.service';

@Component({
  selector: 'app-lista-barcos',
  templateUrl: './lista-barcos.component.html',
  styleUrls: ['./lista-barcos.component.css']
})
export class ListaBarcosComponent implements OnInit {

  barcos : Barco[] = [];

  constructor(private buquesService:BuquesService) {}
  
  ngOnInit(): void {
    this.getBarcos();
  }

  getBarcos(): void {
    this.barcos = this.buquesService.getBarcos();
  }
}
