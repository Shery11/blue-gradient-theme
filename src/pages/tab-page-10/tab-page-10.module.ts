import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabPage10 } from './tab-page-10';

@NgModule({
    declarations: [
        TabPage10,
    ],
    imports: [
        IonicPageModule.forChild(TabPage10),
    ],
    exports:[
        TabPage10
    ]
})

export class TabPage10Module { }
