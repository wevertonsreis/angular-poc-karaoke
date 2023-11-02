import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  menuItemClicked(item: string): void {
    console.log(`Clicou no ${item}`);
    // Adicione aqui a lógica para lidar com o clique do menu
  }
  
}
