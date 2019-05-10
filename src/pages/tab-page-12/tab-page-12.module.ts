import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabPage12 } from './tab-page-12';

@NgModule({
    declarations: [
        TabPage12,
    ],
    imports: [
        IonicPageModule.forChild(TabPage12),
    ],
    exports:[
        TabPage12
    ]
})

export class TabPage12Module { }
