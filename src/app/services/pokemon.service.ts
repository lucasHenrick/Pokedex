import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { from, Observable, ReplaySubject } from 'rxjs';
import { Pokemon } from '../model/Pokemon.model';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  
  public pokemons: Pokemon[] = [];
  
  constructor(private http : HttpClient)  {
  }

  await findAll(url: string): Pokemon[] {
    
    this.pokemons = [];
    this.http.get<any>(url).pipe(
      map(value => value.results),
      map((value: any) => {
        return from(value).pipe(
          mergeMap((v: any) => this.http.get(v.url)),
        );
      }),
      mergeMap(value => value),
    ).subscribe((result: any) => {
      this.pokemons[result.id] = {
        number:result.id,
        image:result.sprites.front_default,
        name: result.forms[0].name,
        types: result.types.map(t => t.type.name),

      }
      });
      return this.pokemons;
  }
}
