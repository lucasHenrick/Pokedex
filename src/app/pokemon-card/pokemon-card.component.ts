import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../model/Pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  @Input('pokemon')
  public pokemon: Pokemon;

  constructor() { }

  ngOnInit(): void {
    console.log(this.pokemon)
  }

  public completeZero(value: number): String {
    let formated = value.toString()
    while(formated.length < 3){
      formated = '0' + formated ;
    }
    return formated;
  }

  public getImgPokemon(pokemon: Pokemon): string {
      return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.completeZero(pokemon.number)}.png`;
  }

  public UpperCase(value: string): string {
    value = value.substring(0,1).toUpperCase() + value.substring(1);
    return value;
  }

}
