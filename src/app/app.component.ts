import { Component } from '@angular/core';
import { MusicasService } from './services/musicas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  displayedColumns: string[] = ['codigo', 'interprete', 'titulo', 'inicio_letra'];
  dados: any;

  constructor(private musicaService : MusicasService){};

  menuItemClicked(item: string): void {
    console.log(`Clicou no ${item}`);
    // Adicione aqui a lógica para lidar com o clique do menu
  }

  ngOnInit(): void {
    this.musicaService.obterDados().subscribe(
      (response) => {
        this.dados = response;
        console.log('Dados recebidos:', this.dados);
      },
      (error) => {
        console.error('Erro ao obter dados:', error);
      }
    );
  }
  
}
