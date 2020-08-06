import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  url: string = "http://localhost:3000/heroes/";
   private heroe:any;
  
  constructor(private http: HttpClient) {
    const Options = {
      headers: new HttpHeaders({
        //Header for send
        'Content-Type': 'aplication/json',
      }),
    };
   }

   getHeroes(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
  
  
 getHeroe(idx):any{
  return this.http.get<any>(this.url +idx)
          
  }
 
  
}
export interface Heroe{
  id:number;
  nombre:string;
  bio:string;
  img:string;
  aparicion:string;
  casa:string;
}
