import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})

export class ListadoComponent {
  heroes: string [] = ['Jhin','Nami','Sett','Zed'];
  heroeBorrado: string = '';
  
  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }  
}
