import { Injectable } from '@angular/core';
import { PokeAPI } from '../../environments/PokeAPI';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {

  constructor(
    private http: HttpClient
  ) { }
  getPokemons() {
    return this.http.get(`${PokeAPI.url}pokemon`);
  }
  getPokemon(id) {
    return this.http.get(`${PokeAPI.url}pokemon/${id}`)
  }
}
