import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 misheroes:Heroe[];
  constructor(public _heroe:HeroesService, public router:Router) { }

  ngOnInit(): void {
this._heroe.getHeroes().subscribe(valor=>{

  this.misheroes=valor;
});
  }
verHeroe(idx:number){
  this.router.navigate(['/heroe', idx])
}
}