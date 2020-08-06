import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe: Heroe;
  @Output() heroeSeleccionado: EventEmitter<any>;

  constructor() {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }
  verHeroe(valor) {
    this.heroeSeleccionado.emit(valor)
  }
}
