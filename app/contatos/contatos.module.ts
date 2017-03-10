import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContatosListaComponent } from './contatos-lista.component';

@NgModule({
    imports: [
        CommonModule
    ]
    declarations: [
        ContatosListaComponent
    ],
    exports: [
        ContatosListaComponent
    ]
})
export class ContatosModule {}