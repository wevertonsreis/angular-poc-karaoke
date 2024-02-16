import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { MusicasService } from './services/musicas.service';
import { MatTableDataSource } from '@angular/material/table';
import { take } from 'rxjs';
import { ListaMusicas } from './models/lista-musicas';
import { Musica } from './models/musica';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dados!: ListaMusicas;
  colunasExibidas: string[] = ['codigo', 'interprete_titulo'];
  dadosTabela = new MatTableDataSource<Musica>();
  pesquisaHabilitada = false;
  exibirCarregando = true;

  constructor(
    private musicaService : MusicasService
  ) {};

  ngOnInit(): void {
    this.musicaService.obterDados()
      .pipe(take(1))
      .subscribe({
        next: (response) => {
          this.dados = response;
          this.exibirCarregando = false;
          this.dadosTabela = new MatTableDataSource(this.dados.musicas);
        },
        error(err) {
          console.error(err);
        },
    });

  }
  
  controlarPesquisa(): void {
    this.pesquisaHabilitada = !this.pesquisaHabilitada;

    if (!this.pesquisaHabilitada) {
      this.dadosTabela.filter = '';
    } 

  }

  aplicarFiltro(event: Event) {
    const valor_filtrado = (event.target as HTMLInputElement).value;

    if (valor_filtrado.length < 2) {
      return;
    } 

    this.dadosTabela.filter = valor_filtrado.trim().toLowerCase();
  }

}
