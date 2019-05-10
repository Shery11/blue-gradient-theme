import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabPage9 } from './tab-page-9';

@NgModule({
    declarations: [
        TabPage9,
    ],
    imports: [
        IonicPageModule.forChild(TabPage9),
    ],
    exports:[
        TabPage9
    ]
})

export class TabPage9Module { }
