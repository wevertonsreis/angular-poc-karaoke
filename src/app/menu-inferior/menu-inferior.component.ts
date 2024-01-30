import { Component } from '@angular/core';

interface Tab {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-menu-inferior',
  templateUrl: './menu-inferior.component.html',
  styleUrls: ['./menu-inferior.component.css']
})
export class MenuInferiorComponent {

  tabs: Tab[] = [
    { label: 'Tab 1', icon: 'home', route: '/tab1' },
    { label: 'Tab 2', icon: 'list', route: '/tab2' },
    { label: 'Tab 3', icon: 'person', route: '/tab3' }
  ];
  
}
