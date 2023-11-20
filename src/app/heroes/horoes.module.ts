import { NgModule } from '@angular/core';
import { heroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { CommonModule } from '@angular/common';

@NgModule({

    declarations:[
        heroeComponent,
        ListadoComponent
    ],
    //cosas visible que quiero que sean publica
    exports:[
        ListadoComponent
    ],
    //aqui van todos los modulos
    imports:[
        CommonModule
    ]

})


export class HeroesModule{

}
