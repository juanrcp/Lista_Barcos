import { Component, Input, OnInit } from '@angular/core';
import { Barco } from '../Barco';
import { BuquesService } from '../buques.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  
  barco: Barco | undefined;
  
  constructor( 
    private route: ActivatedRoute,
    private buquesService :BuquesService,
    private location: Location
  ){}

  ngOnInit(): void {
    this.getBarco();
  }

  getBarco(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.barco = this.buquesService.getBarco(id);
  }

  goBack(): void {
    this.location.back();
  }

}
