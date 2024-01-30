import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicasService {

  private apiUrl = 'https://raw.githubusercontent.com/wevertonsreis/karaoke-musicas-dados/master/dados/musicas.json';

  constructor(private httpClient: HttpClient) {}

  // Exemplo de uma solicitação HTTP GET
  obterDados(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }

}
