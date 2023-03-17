import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Pokemon } from '../pokemon-card/pokemon.model';

const API_URL = 'http://localhost:3000/pokemons'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http : HttpClient) { }

  getPokemons() : Observable<Pokemon[]>
  {
    return this.http.get<Pokemon[]>(API_URL);
  }

  updatePokemon(pokemon : Pokemon) : Observable<Pokemon>
  {
    return this.http.put<Pokemon>(`${API_URL}/${pokemon.id}`,pokemon);
  }

  deletePokemon(id : number) : Observable<Pokemon>
  {
    return this.http.delete<Pokemon>(`${API_URL}/${id}`)
  }

  getPokemonById(id: number) : Observable<Pokemon>
  {
    return this.http.get<Pokemon>(`${API_URL}/${id}`)
  }

  createPokemon(pokemon : Pokemon) : Observable<Pokemon>
  {
    pokemon.id = Math.floor((Math.random() * 10000))

    return this.http.post<Pokemon>(API_URL,pokemon);
  }

}
