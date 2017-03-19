import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContatoDetalheComponent } from './contato-detalhe.component';
import { ContatoRoutingModule } from './contato-routing.module';
import { ContatosListaComponent } from './contatos-lista.component';

@NgModule({
    imports: [
        CommonModule,
        ContatoRoutingModule
    ],
    declarations: [
        ContatoDetalheComponent,
        ContatosListaComponent
    ],
    exports: [
        ContatosListaComponent
    ]
})
export class ContatosModule {}