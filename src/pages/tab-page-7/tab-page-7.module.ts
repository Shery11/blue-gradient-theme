import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabPage7 } from './tab-page-7';

@NgModule({
    declarations: [
        TabPage7,
    ],
    imports: [
        IonicPageModule.forChild(TabPage7),
    ],
    exports:[
        TabPage7
    ]
})

export class TabPage7Module { }
