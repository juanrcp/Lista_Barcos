import { Injectable } from '@angular/core';
import { Barco } from './Barco';
import { BARCOS } from './mock-barcos';

@Injectable({
  providedIn: 'root'
})
export class BuquesService {

  barcos : Barco [] = BARCOS;

  constructor() { }

  getBarcos() : Barco[] {
    return this.barcos;
  }

  getBarco(id: number): Barco{
    const barco : Barco = this.barcos.find(h => h.id === id)!;
    return barco;
  }

}
