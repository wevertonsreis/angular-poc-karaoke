import { Component } from '@angular/core';
import { MusicasService } from './services/musicas.service';
import { MatTableDataSource } from '@angular/material/table';
import { take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  displayedColumns: string[] = ['codigo', 'interprete', 'titulo'];

  dados: any;
  dados_da_tabela = new MatTableDataSource();
  pesquisa_habilitada = false;
  exibir_carregando = true;

  constructor(private musicaService : MusicasService){};

  ngOnInit(): void {
    this.musicaService.obterDados()
      .pipe(take(1))
      .subscribe({
        next: (response) => {
          this.dados = response;
          console.log('Dados recebidos:', this.dados);
          this.exibir_carregando = false;
          this.dados_da_tabela = new MatTableDataSource(this.dados.musicas);
          console.info('ngOnInit response', this.dados_da_tabela);
        },
        error(err) {
          console.error(err);
        },
    });

  }
  
  controlarPesquisa(): void {
    this.pesquisa_habilitada = !this.pesquisa_habilitada;

    if (!this.pesquisa_habilitada) {
      this.dados_da_tabela.filter = '';
    }
  }

  aplicarFiltro(event: Event) {
    const valor_filtrado = (event.target as HTMLInputElement).value;

    if (valor_filtrado.length < 2) {
      return;
    } 

    this.dados_da_tabela.filter = valor_filtrado.trim().toLowerCase();
  }

}
