import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaMusicas } from '../models/lista-musicas';

@Injectable({
  providedIn: 'root'
})
export class MusicasService {

  private apiUrl = 'https://raw.githubusercontent.com/wevertonsreis/karaoke-musicas-dados/master/dados/musicas.json';

  constructor(private httpClient: HttpClient) {}

  obterDados(): Observable<ListaMusicas> {
    return this.httpClient.get<ListaMusicas>(this.apiUrl);
  }

}
